/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  '@xircus-web3/components',
])

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: false
})

// module.exports = {
//   reactStrictMode: true,
//   swcMinify: false,
// }