const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withPWA = require('next-pwa')

module.exports = withPlugins([
  {
    images: {
      domains: ['storage.googleapis.com']
    },
    distDir: 'build',
    future: { webpack5: true },
    typescript: {
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    env: {
      SERVER_URL: 'https://my-json-server.typicode.com/solrachix/podcastr',
      NEXT_PUBLIC_SITE_URL: 'http://localhost:3000'
    }
  },
  [withPWA, {
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
      register: true,
      sw: '/sw.js'
    }
  }],
  withSvgr
  // your other plugins here
])

