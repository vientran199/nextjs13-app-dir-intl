/** @type {import('next').NextConfig} */
const nextConfig = {
    // async headers() {
    //     return [
    //         {
    //             source: '/:path*',
    //             headers: [
    //                 {
    //                     key: 'accept-language',
    //                     value: 'vn',
    //                 },
    //             ],
    //         },
    //     ]
    // },
    // i18n: {
    //     locales: ['en', 'vn'],
    //     defaultLocale: 'vn',
    //     localeDetection: false
    // },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/vn',
    //         },
    //     ]
    // },
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/vn',
    //             permanent: true,
    //             locale: undefined,
    //         },
    //     ]
    // },
    // trailingSlash: true,
}

module.exports = nextConfig
