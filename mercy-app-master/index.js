const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Text, Checkbox, Password } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('./app-admin-ui');
// const { NextApp } = require('@keystonejs/app-next');

const initializeData = require('./initial-data');

const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const {
	Address,
	Contact,
	Card,
	User,
	Product,
	Category,
	Comment,
	Site,
	Page,
	Section,
	Block,
	Schedule,
	Setting,
	Order,
	Variant,
	Attribute,
	OptionValue,
	Option,
	Collection,
	Customer,
	Coupon
} = require('./schema');
const PROJECT_NAME = 'mercy-app';

const keystone = new Keystone({
	name: PROJECT_NAME,
	adapter: new Adapter(),
	onConnect: initializeData
});

keystone.createList('User', User);
keystone.createList('Address', Address);
keystone.createList('Contact', Contact);
keystone.createList('Card', Card);
keystone.createList('Product', Product);
keystone.createList('Category', Category);
keystone.createList('Comment', Comment);
keystone.createList('Site', Site);
keystone.createList('Page', Page);
keystone.createList('Section', Section);
keystone.createList('Customer', Customer);
keystone.createList('Collection', Collection);
keystone.createList('Block', Block);
keystone.createList('Schedule', Schedule);
keystone.createList('Setting', Setting);
keystone.createList('Order', Order);
keystone.createList('Coupon', Coupon);
keystone.createList('Variant', Variant);
keystone.createList('Attribute', Attribute);
keystone.createList('OptionValue', OptionValue);
keystone.createList('Option', Option);

const authStrategy = keystone.createAuthStrategy({
	type: PasswordAuthStrategy,
	list: 'User'
});

module.exports = {
	keystone,
	apps: [
		new GraphQLApp(),
		new AdminUIApp({
			enableDefaultRoute: true,
			hooks: require.resolve('./admin-ui/'),
			authStrategy
		})
		// new NextApp({ dir: 'shop' })
	]
};
