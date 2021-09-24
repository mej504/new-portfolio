const projects = [
	{
		client:'HealthEconomics.Com',
		clientSlug: 'hecom',
		projects: [
			{
				title: 'Innovation Webinar Landing Page',
				builtWith: 'Pug, SCSS, JS',
				problem: 'Client wanted a basic landing page for its Innovation Webinar',
				solution: 'A tidy landing page outlining basic information about the webinar.',
				type:'Development',
				viewable: true,
				link: ['/pages/innovation-webinar/index.html'],
				images: ['/img/thumb/innovation-webinar.jpg']
			},

			{
				title: 'Webinar Services Page',
				builtWith: 'Pug, SCSS, JS',
				problem: 'Client sought a refreshed layout and design for its webinar services page',
				solution: 'Updated page with cleaner layout and improved user experience',
				type:'Development',
				viewable: true,
				link: ['https://www.healtheconomics.com/webinar-services/'],
				images: ['/img/thumb/webinar-services.jpg']
			},

			{
				title: 'Whitepaper Download Page',
				builtWith: 'Pug, SCSS, JS',
				problem: 'Client, partnered with consulting agency Xcenda, needed a custom landing page to download their new white paper',
				solution: 'A simple portal through which users could download the white paper',
				type:'Development',
				viewable: true,
				link: ['/pages/xcenda-page/index.html'],
				images: ['/img/thumb/xcenda.jpg']
			},

			{
				title: '2019 Value Communication White Paper',
				builtWith: 'Adobe Illustrator',
				description:'A white paper for HealthEconomics.Com\'s 2019 Value Communication Survey. The paper was built in Adobe Illustrator',
				type:'Design',
				viewable: true,
				link: ['/pdf/ValueCommPaper.pdf'],
				images: ['/img/thumb/value-comm-whitepaper.jpg']
			},  

			{
				title: 'ISPOR Europe 2019 Flyer',
				builtWith: 'Adobe Illustrator',
				description:'A marketing flyer to bolster HealthEconomics.Com\'s presence at the International Society for Pharmacoeconomics and Outcomes Research\'s 2019 meeting in Europe',
				type:'Design',
				viewable: true,
				link: ['/img/full/ISPOR2019Flyer.jpg'],
				images: ['/img/thumb/ispor-2019-flyer-thumb.jpg']
			},  
			{
				title: '5 Trade Show Tips Flyer',
				builtWith: 'Adobe Illustrator',
				description:'A complementary flyer designed for HealthEconomics.Com\'s presence at ISPOR Europe 2019',
				type:'Design',
				viewable: true,
				link: ['/pdf/TradeShowFlyer.pdf'],
				images: ['/img/thumb/ispor-tradeshow-flyer.jpg']
			},  
			{
				title: 'Value Communication Survey Infographic',
				builtWith: 'Adobe Illustrator',
				description:'An infographic designed to accompany a HealthEconomics.Com blog post on its survey regarding value communication',
				type:'Design',
				viewable: true,
				link: ['/img/full/ValueCommInfographic.jpg'],
				images: ['/img/full/ValueCommInfographic.jpg'],
			},  
		]
	},
	{
		client:'Women\'s Political Collaborative of Tennessee',
		clientSlug: 'wpctn',
		projects: [
			{
				title: 'Membership Manager',
				builtWith: 'PHP, SCSS, JS',
				problem: 'WPCTN sought a streamlined experience for managing members on its WordPress site.',
				solution: 'A custom plugin to create an intuitive, lightweight membership management process.',
				type:'Development',
				link: null,
				viewable: false,
				images: [
					'/img/MembershipManager_1.png',
					'/img/MembershipManager_2.png',
					'/img/MembershipManager_3.png',
				]
			}
		]
	},
	{
		client: 'Personal Projects',
		clientSlug: 'personal',
		projects: [

			{
				title: 'Lite Contacts',
				builtWith: 'Node, MongoDB, Handlebars, SCSS, JS',
				description: 'A minimalistic platform for managing personal and professional contacts. (Desktop only)',
				link: 'https://lite-contacts.herokuapp.com/',
				type: 'Development',
				viewable:true,
				images: [
					'/img/CM1.png',
					'/img/CM2.png',
					'/img/CM3.png',
				]
			},

			{
				title: 'AeroFX',
				builtWith: 'Node, IndexedDB, Vue, SCSS',
				description: 'A lightweight currency converter built with fixer.io\'s foreign exchange rate API.',
				link: 'https://minyard.dev/CurrencyConverter',
				type: 'Development',
				viewable:true,
				images: [
					'/img/CC1.png',
					'/img/CC2.png',
				]
			},

			{
				title: 'Easy Tasks',
				builtWith: 'IndexedDB, Vue, SCSS',
				description: 'A simple task manager built using the browser\'s built-in database and Vue.',
				link: 'https://easy-tasks.herokuapp.com/',
				type: 'Development',
				viewable:true,
				images: [
					'/img/T1.png',
					'/img/T2.png',
				]
			},

		]
	}
]

export default projects;