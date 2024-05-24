/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["saya.net.in"],
  },
};

export default nextConfig;

//Performance Optimization
//Next.js provides several optimizations for images, such as automatic resizing, lazy loading, and serving images in modern formats like WebP when supported. These optimizations help improve the performance of your application by:

//Reducing image load times.
//Reducing bandwidth usage.
//Improving the overall user experience.
//To ensure these optimizations are applied correctly, Next.js needs to know which external domains are allowed to serve images. This way, it can properly handle the images and apply the necessary transformations.

//By requiring you to list trusted domains in the next.config.js file, Next.js ensures that your application benefits from enhanced security, better performance, and a more controlled and predictable behavior when dealing with external images.
// This explicit configuration approach aligns with best practices in modern web development, where security and performance are paramount.
