const DEFAULT_PAGE_SIZE = 5;

export const merchants= {
	page: 0,
	pageSize: DEFAULT_PAGE_SIZE,
	size: 7,
	orderBy: 'id',
	data: [{
		id: 1,
		firstname: 'Raphaela',
		lastname: 'Romanov',
		email: 'raphaela.romanov@mercury.com',
		phone: '1234567890',
		hasPremiun: true,
		bids: [],
		avatarUrl: 'images/Raphaela.jpg'
	},{
		id: 2,
		firstname: 'Miguel',
		lastname: 'Ange',
		email: 'miguel.angel@mercury.com',
		phone: '1234567890',
		hasPremiun: true,
		bids: [],
		avatarUrl: 'images/miguel.jpg'
	},{
		id: 3,
		firstname: 'Mark',
		lastname: 'Zuckerberg',
		email: 'mark.zuckerberg@facebook.com',
		phone: '1234567890',
		hasPremiun: false,
		bids: [{
			id: 1,
			carTitle: 'React',
			amount: 1234.2,
			created: '21-01-2018'
		}],
		avatarUrl: 'images/mark.jpg'
	},
	{
		id: 4,
		firstname: 'Kurt',
		lastname: 'kobain',
		email: 'Kurt.kobain@mercury.com',
		phone: '1234567890',
		hasPremiun: true,
		bids: [],
		avatarUrl: 'images/kurt.jpg'
	},{
		id: 5,
		firstname: 'Armando',
		lastname: 'Reveron',
		email: 'armando.reveron@mercury.com',
		phone: '1234567890',
		hasPremiun: true,
		bids: [{
			id: 1,
			carTitle: 'Instagram',
			amount: 124.2,
			created: '21-01-2018'
		}],
		avatarUrl: 'images/armando.jpg'
	},{
		id: 6,
		firstname: 'Gustavo',
		lastname: 'Cerati',
		email: 'gustavo.cerati@mercury.com',
		phone: '1234567890',
		hasPremiun: true,
		bids: [],
		avatarUrl: 'images/gustavo.jpeg'
	},{
		id: 7,
		firstname: 'Quentin',
		lastname: 'Tarantino',
		email: 'quentin.tarantino@mercury.com',
		phone: '1234567890',
		hasPremiun: true,
		bids: [{
			id: 1,
			carTitle: 'DT',
			amount: 124.2,
			created: '21-01-2018'
		},{
			id: 1,
			carTitle: 'FACEBOOK',
			amount: 124.2,
			created: '21-01-2018'
		},{
			id: 1,
			carTitle: 'DT',
			amount: 199.2,
			created: '21-01-2018'
		},{
			id: 1,
			carTitle: 'Twitter',
			amount: 888.2,
			created: '21-01-2018'
		}],
		avatarUrl: 'images/quentin.jpg'
	},
	{
		id: 8,
		firstname: 'Janis',
		lastname: 'Joplin',
		email: 'janis.joplin@mercury.com',
		phone: '1234567890',
		hasPremiun: true,
		bids: [{
			id: 1,
			carTitle: 'DT',
			amount: 124874.2,
			created: '21-01-2018'
		}],
		avatarUrl: 'images/janis.jpeg'
	},
	{
		id: 9,
		firstname: 'John',
		lastname: 'Lennon',
		email: 'John.Lennon@mercury.com',
		phone: '1234567890',
		hasPremiun: true,
		bids: [{
			id: 1,
			carTitle: 'DT',
			amount: 124.2,
			created: '21-01-2018'
		}],
		avatarUrl: 'images/lennon.jpg'
	},
	{
		id: 10,
		firstname: 'Briggete',
		lastname: 'Bardot',
		email: 'Brigette.Bardot@mercury.com',
		phone: '1234567890',
		hasPremiun: true,
		bids: [{
			id: 1,
			carTitle: 'BT',
			amount: 1024.2,
			created: '21-01-2018'
		}],
		avatarUrl: 'images/bardot.jpg'
	},
	{
		id: 11,
		firstname: 'Antonin',
		lastname: 'Artaud',
		email: 'antoninartauds@mercury.com',
		phone: '1234567890',
		hasPremiun: false,
		bids: [{
			id: 1,
			carTitle: 'TELECOM',
			amount: 994.2,
			created: '21-01-2018'
		}, {
			id: 1,
			carTitle: 'Ferrari',
			amount: 48124.2,
			created: '21-01-2018'
		}],
		avatarUrl: 'images/antoninartaud.jpg'
	}
	]
};
