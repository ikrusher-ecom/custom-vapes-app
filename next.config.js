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
		prodDir: 'https://custom-vapes-app.vercel.app'
	},
	images: {
		domains: [ 'custom-vapes-app.vercel.app' ]
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};
