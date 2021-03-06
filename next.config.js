/*
 * @Author: Jinqi Li
 * @Date: 2022-04-13 17:37:17
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-16 04:26:39
 * @FilePath: /custom-vapes-app/next.config.js
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true
};

module.exports = nextConfig;

module.exports = {
	env: {
		devDir: 'http://localhost:3000',
		prodDir: 'https://customvapes.ikrusher.com',
		mongodbURI: 'mongodb+srv://ikrusher-custom:wpyLX5LxPbgukfTB@cluster0.nscjp.mongodb.net/customDB?retryWrites=true&w=majority',
		mongodbID: 'customDB',
		mode: 'prod'
	},
	images: {
		domains: ['customvapes.ikrusher.com']
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	node: {
		dns: 'empty',
		net: 'empty'
	}
};
