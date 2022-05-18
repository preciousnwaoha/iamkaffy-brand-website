/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com', "youtube.com", "media.giphy.com"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/https://play.google.com/log?format=json&hasfast=true&authuser=0/*',
  //       destination: 'https://www.youtube-nocookie.com/*',
  //     },
  //   ]
  // },
  // async headers() {
  //   return [
  //     {
  //       source: '/about',
  //       headers: [
  //         {
  //           key: 'x-custom-header',
  //           value: 'my custom header value',
  //         },
  //         {
  //           key: 'x-another-custom-header',
  //           value: 'my other custom header value',
  //         },
  //       ],
  //     },
  //   ]
  // },
}

module.exports = nextConfig
