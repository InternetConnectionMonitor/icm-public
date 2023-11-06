/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    disableStaticImages: true,
    loader: 'custom',
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ['jpg', 'jpeg', 'png', 'svg'],
        optimizeImagesInDev: true,
      },
    ],

    // your other plugins here
  ],
  nextConfig,
);
