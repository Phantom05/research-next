require('dotenv').config();
const {
	File,
	Text,
	CloudinaryImage,
	Slug,
	Relationship,
	Select,
	Password,
	Checkbox,
	CalendarDay,
	DateTime,
	OEmbed,
	Float,
	Integer
} = require('@keystonejs/fields');
const {
	createdAt,
	createdBy,
	updatedAt,
	updatedBy,
	atTracking,
	byTracking
} = require('@keystonejs/list-plugins');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const getYear = require('date-fns/get_year');

// const { staticRoute, staticPath, distDir } = require('./config');
const dev = process.env.NODE_ENV !== 'production';

let iframelyAdapter;

const cloudinaryAdapter = new CloudinaryAdapter({
	cloudName: process.env.CLOUDINARY_CLOUD_NAME,
	apiKey: process.env.CLOUDINARY_KEY,
	apiSecret: process.env.CLOUDINARY_SECRET
});

if (process.env.IFRAMELY_API_KEY) {
	const { IframelyOEmbedAdapter } = require('@keystonejs/oembed-adapters');
	iframelyAdapter = new IframelyOEmbedAdapter({
		apiKey: process.env.IFRAMELY_API_KEY
	});
}

// Access control functions

const access = {
	userIsAdmin: ({ authentication: { item: user } }) =>
		Boolean(user && user.isAdmin),
	userOwnsItem: ({ authentication: { item: user } }) => {
		if (!user) {
			return false;
		}
		return { id: user.id };
	},
	userIsAdminOrOwner: auth => {
		const isAdmin = access.userIsAdmin(auth);
		const isOwner = access.userOwnsItem(auth);
		return isAdmin ? isAdmin : isOwner;
	},
	userIsCurrentAuth: ({ authentication: { item } }) => {
		if (!item) {
			return false;
		}
		return { id: item.id };
	}
};

exports.Address = {
	fields: {
		name: { type: Text },
		type: { type: Text },
		info: { type: Text },
		user: {
			type: Relationship,
			ref: 'User'
		}
	},
	access: {
		read: access.userIsAdminOrOwner,
		update: access.userIsAdminOrOwner,
		delete: access.userIsAdminOrOwner,
		auth: true
	},
	plugins: [atTracking(), createdAt(), updatedAt()],
	labelResolver: item => item.name
};

exports.Card = {
	fields: {
		name: { type: Text },
		type: { type: Text },
		cardType: { type: Text },
		lastFourDigit: { type: Integer },
		user: {
			type: Relationship,
			ref: 'User'
		}
	},
	access: {
		read: access.userIsAdminOrOwner,
		update: access.userIsAdminOrOwner,
		delete: access.userIsAdminOrOwner,
		auth: true
	},
	plugins: [atTracking(), createdAt(), updatedAt()],
	labelResolver: item => item.name
};

exports.Contact = {
	fields: {
		type: { type: Text },
		number: { type: Text },
		user: {
			type: Relationship,
			ref: 'User'
		}
	},
	access: {
		read: access.userIsAdminOrOwner,
		update: access.userIsAdminOrOwner,
		delete: access.userIsAdminOrOwner,
		auth: true
	},
	plugins: [atTracking(), createdAt(), updatedAt()],
	labelResolver: item => item.name
};

// Models
exports.User = {
	fields: {
		name: { type: Text },
		email: { type: Text, isUnique: true },
		addresses: {
			type: Relationship,
			ref: 'Address',
			many: true
		},
		contacts: {
			type: Relationship,
			ref: 'Contact',
			many: true
		},
		cards: {
			type: Relationship,
			ref: 'Card',
			many: true
		},
		dob: {
			type: CalendarDay,
			format: 'Do MMMM YYYY',
			yearRangeFrom: 1901,
			yearRangeTo: getYear(new Date())
		},
		password: { type: Password },
		isAdmin: { type: Checkbox },
		avatar: { type: CloudinaryImage, adapter: cloudinaryAdapter }
	},
	access: {
		read: access.userIsAdminOrOwner,
		update: access.userIsCurrentAuth,
		create: access.userIsAdmin,
		delete: access.userIsAdmin,
		auth: true
	},
	plugins: [atTracking(), createdAt(), updatedAt()],
	labelResolver: item => `${item.name} <${item.email}>`
};

exports.Variant = {
	fields: {
		price: { type: Float },
		available: { type: Boolean },
		product: {
			type: Relationship,
			ref: 'Product'
		},
		optionValues: {
			type: Relationship,
			ref: 'OptionValue',
			many: true
		}
	}
};

exports.Attribute = {
	fields: {
		key: { type: Text },
		value: { type: Text }
	},
	labelResolver: item => item.title
};

exports.OptionValue = {
	fields: {
		name: { type: Text },
		option: {
			type: Relationship,
			ref: 'Option'
		}
	},
	labelResolver: item => item.name
};

exports.Option = {
	fields: {
		name: { type: Text },
		values: {
			type: Relationship,
			ref: 'OptionValue',
			many: true
		}
	},
	labelResolver: item => item.name
};

exports.Collection = {
	fields: {
		title: { type: Text },
		description: { type: Text },
		slug: { type: Slug, from: 'title' },
		products: { type: Relationship, ref: 'Product', many: true }
	},
	labelResolver: item => item.title
};

exports.Product = {
	fields: {
		title: { type: Text },
		slug: { type: Slug, from: 'title' },
		categories: {
			type: Relationship,
			ref: 'Category',
			many: true
		},
		status: {
			type: Select,
			defaultValue: 'draft',
			options: [
				{ label: 'Draft', value: 'draft' },
				{ label: 'Published', value: 'published' }
			]
		},
		collections: { type: Relationship, ref: 'Collection', many: true },
		attribute: { type: Relationship, ref: 'Attribute', many: true },
		variants: { type: Relationship, ref: 'Variant', many: true },
		body: { type: Wysiwyg },
		posted: { type: DateTime, format: 'DD/MM/YYYY' },
		image: { type: CloudinaryImage, adapter: cloudinaryAdapter }
	},
	plugins: [
		atTracking(),
		createdAt(),
		updatedAt(),
		byTracking(),
		createdBy(),
		updatedBy()
	],
	adminConfig: {
		defaultPageSize: 20,
		defaultColumns: 'title, status',
		defaultSort: 'title'
	},
	labelResolver: item => item.title
};

exports.Coupon = {
	fields: {
		title: { type: Text },
		image: { type: CloudinaryImage, adapter: cloudinaryAdapter },
		code: { type: Text },
		discountInPercent: { type: Number },
		number_of_coupon: { type: Number },
		number_of_used_coupon: { type: Number },
		products: { type: Relationship, ref: 'Product', many: true },
		status: { type: Text },
		expiration_date: { type: DateTime }
	},
	labelResolver: item => item.title,
	plugins: [
		atTracking(),
		createdAt(),
		updatedAt(),
		byTracking(),
		createdBy(),
		updatedBy()
	]
};

exports.Category = {
	fields: {
		title: { type: Text },
		slug: { type: Slug, from: 'title' },
		products: {
			type: Relationship,
			ref: 'Product',
			many: true
		},
		children: {
			type: Relationship,
			ref: 'Category',
			many: true
		},
		type: { type: Text },
		icon: { type: Text }
	},
	labelResolver: item => item.title,
	plugins: [
		atTracking(),
		createdAt(),
		updatedAt(),
		byTracking(),
		createdBy(),
		updatedBy()
	]
};

exports.Comment = {
	fields: {
		body: { type: Text, isMultiline: true },
		originalProduct: {
			type: Relationship,
			ref: 'Product'
		}
	},
	plugins: [
		atTracking(),
		createdAt(),
		updatedAt(),
		byTracking(),
		createdBy(),
		updatedBy()
	],
	labelResolver: item => item.body
};

exports.Site = {
	fields: {
		title: { type: Text },
		description: { type: Text },
		status: {
			type: Select,
			defaultValue: 'draft',
			options: [
				{ label: 'Draft', value: 'draft' },
				{ label: 'Published', value: 'published' }
			]
		},
		pages: {
			type: Relationship,
			ref: 'Page',
			many: true
		}
	},
	plugins: [
		atTracking(),
		createdAt(),
		updatedAt(),
		byTracking(),
		createdBy(),
		updatedBy()
	],
	labelResolver: item => item.title
};

exports.Page = {
	fields: {
		title: { type: Text },
		description: { type: Text },
		site: {
			type: Relationship,
			ref: 'Site'
		},
		status: {
			type: Select,
			defaultValue: 'draft',
			options: [
				{ label: 'Draft', value: 'draft' },
				{ label: 'Published', value: 'published' }
			]
		},
		sections: {
			type: Relationship,
			ref: 'Section',
			many: true
		}
	},
	plugins: [
		atTracking(),
		createdAt(),
		updatedAt(),
		byTracking(),
		createdBy(),
		updatedBy()
	],
	labelResolver: item => item.title
};

exports.Section = {
	fields: {
		title: { type: Text },
		description: { type: Text },
		page: {
			type: Relationship,
			ref: 'Page'
		},
		blocks: {
			type: Relationship,
			ref: 'Block',
			many: true
		}
	},
	plugins: [
		atTracking(),
		createdAt(),
		updatedAt(),
		byTracking(),
		createdBy(),
		updatedBy()
	],
	labelResolver: item => item.title
};

exports.Block = {
	fields: {
		title: { type: Text },
		description: { type: Text },
		section: {
			type: Relationship,
			ref: 'Section'
		}
	},
	plugins: [
		atTracking(),
		createdAt(),
		updatedAt(),
		byTracking(),
		createdBy(),
		updatedBy()
	],
	labelResolver: item => item.title
};

exports.Schedule = {
	fields: {
		title: { type: Text },
		description: { type: Text }
	},
	plugins: [
		atTracking(),
		createdAt(),
		updatedAt(),
		byTracking(),
		createdBy(),
		updatedBy()
	],
	labelResolver: item => item.title
};

exports.Setting = {
	fields: {
		type: { type: Text }
	},
	plugins: [
		atTracking(),
		createdAt(),
		updatedAt(),
		byTracking(),
		createdBy(),
		updatedBy()
	]
	// labelResolver: item => item.title
};

exports.Customer = {
	fields: {
		firstName: { type: Text },
		lastName: { type: Text },
		orders: {
			type: Relationship,
			ref: 'Order',
			many: true
		}
	}
};

exports.Order = {
	fields: {
		amount: { type: Float },
		deliveryTime: { type: DateTime },
		deliveryAddress: { type: Text },
		subtotal: { type: Float },
		discount: { type: Float },
		deliveryFee: { type: Float },
		status: { type: Number },
		customer: {
			type: Relationship,
			ref: 'Customer'
		},
		variants: {
			type: Relationship,
			ref: 'Variant',
			many: true
		}
	},
	plugins: [atTracking(), createdAt(), updatedAt()]
	// labelResolver: item => item.title
};
