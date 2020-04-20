const seed = {
	User: [
		{
			name: 'Admin User',
			email: 'ichenwu01@gmail.com',
			isAdmin: true,
			dob: '1990-01-01',
			password: 'wuichen01',
			addresses: [
				{
					where: {
						info: '27 Street, 2569 Heritage Road Visalia, CA 93291'
					}
				},
				{
					where: {
						info: '33 Baker Street, Crescent Road, CA 65746'
					}
				}
			]
		},
		{
			name: 'Demo User',
			email: 'user@keystonejs.com',
			isAdmin: false,
			dob: '1995-06-09',
			password: 'password',
			addresses: [
				{
					where: {
						info: '43 Street, 2341 Road Visalia, Ny 24252'
					}
				},
				{
					where: {
						info: '29 Eve Street, 543 Evenue Road, Ny 87876'
					}
				}
			]
		}
	],
	Address: [
		{
			type: 'primary',
			name: 'Home',
			info: '27 Street, 2569 Heritage Road Visalia, CA 93291',
			user: {
				where: {
					email: 'ichenwu01@gmail.com'
				}
			}
		},
		{
			type: 'secondary',
			name: 'Office',
			info: '33 Baker Street, Crescent Road, CA 65746',
			user: {
				where: {
					email: 'ichenwu01@gmail.com'
				}
			}
		},
		{
			type: 'primary',
			name: 'Home',
			info: '43 Street, 2341 Road Visalia, Ny 24252',
			user: {
				where: {
					email: 'user@keystonejs.com'
				}
			}
		},
		{
			type: 'secondary',
			name: 'Office',
			info: '29 Eve Street, 543 Evenue Road, Ny 87876',
			user: {
				where: {
					email: 'user@keystonejs.com'
				}
			}
		}
	],
	Card: [
		{
			type: 'primary',
			cardType: 'paypal',
			name: 'Jhon Doe Smith',
			lastFourDigit: 2349,
			user: {
				where: {
					email: 'ichenwu01@gmail.com'
				}
			}
		},
		{
			type: 'secondary',
			cardType: 'master',
			name: 'Jhon Doe Smith',
			lastFourDigit: 8724,
			user: {
				where: {
					email: 'ichenwu01@gmail.com'
				}
			}
		},
		{
			cardType: 'paypal',
			name: 'Jonathon Parker Doe',
			lastFourDigit: 8723,
			user: {
				where: {
					email: 'user@keystonejs.com'
				}
			}
		},
		{
			cardType: 'master',
			name: 'Jonathon Parker Doe',
			lastFourDigit: 4352,
			user: {
				where: {
					email: 'user@keystonejs.com'
				}
			}
		},
		{
			cardType: 'visa',
			name: 'Jonathon Parker Doe',
			lastFourDigit: 2398,
			user: {
				where: {
					email: 'user@keystonejs.com'
				}
			}
		}
	],
	Contact: [
		{
			type: 'primary',
			number: '202-555-0191',
			user: {
				where: {
					email: 'ichenwu01@gmail.com'
				}
			}
		},
		{
			type: 'secondary',
			number: '202-555-0701',
			user: {
				where: {
					email: 'ichenwu01@gmail.com'
				}
			}
		},
		{
			type: 'primary',
			number: '202-555-0191',
			user: {
				where: {
					email: 'user@keystonejs.com'
				}
			}
		},
		{
			type: 'secondary',
			number: '202-555-0191',
			user: {
				where: {
					email: 'user@keystonejs.com'
				}
			}
		}
	]
};

module.exports = async keystone => {
	const users = await keystone.lists.User.adapter.findAll();
	if (!users.length) {
		await keystone.createItems(seed);
	}
};
