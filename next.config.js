/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['sagnerli.sirv.com', 'fs.chomchob.com'],
	},
}

module.exports = nextConfig
