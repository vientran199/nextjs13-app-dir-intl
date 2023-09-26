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

    // it will create a folder at “.next/standalone” which can then be deployed on its own without installing “node_modules”. 
    // It is also one of the most effective methods for optimizing the docker file
    output: 'standalone'
}

module.exports = nextConfig
