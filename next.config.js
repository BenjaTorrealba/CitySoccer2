/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,

/*
*/
  output: 'export',
  images: { unoptimized: true, }, // Disable Image Optimization API for static export
  


  // Webpack custom configuration
  webpack(config, options) {
    // Disable caching temporarily
    config.cache = false;
    
    // Existing file loader rules
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/, // Include the file types you need
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos',
          outputPath: 'static/videos',
          name: '[name].[hash].[ext]',
          esModule: false,
        },
      },
    });

    return config;
  },


  //
  // Redirect configuration
  /*

  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.hockeyacademy.com',
          },
        ],
        destination: 'https://hockeyacademy.cl/:path*',
        permanent: true, // This makes it a 301 redirect from www to non-www
      },
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'hockeyacademy.cl',
          },
        ],
        destination: 'https://www.hockeyacademy.cl/:path*',
        permanent: true, // Swap this based on your preference
      },
    ];
  },

  */
  // Redirect configuration ends
  //

};

module.exports = nextConfig;
