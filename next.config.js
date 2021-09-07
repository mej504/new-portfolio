const path = require('path');

module.exports = {

	eslint: {
		ignoreDuringBuilds: true
	},

	reactStrictMode: true,

	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles'), path.join(__dirname, 'src/components')]
	}

}
