/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // Specify the output directory as 'out' instead of the default 'build' or 'dist'
    // Change 'export' to 'out'
    distDir: 'out',
    output: 'export',
  
    images: {
      // Disable image optimization for export
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;