# Xircus Chakra UI Components

These Chakra UI Components are simplified and uses Xircus SDK

## Installation
```
yarn add @xircus-web3/components
npm install @xircus-web3/components
```

## Usage
If you're using a **Next** JS app, this is how the **_app.js** will look like
```
import { XircusChakraProvider } from "@xircus-web3/components"

function MyApp({ Component, pageProps }) {
  return (
    <XircusChakraProvider autoConnect={true}>
      <Component {...pageProps} />
    </XircusChakraProvider>
  )
}

export default MyApp
```

### Components
- Connect Wallet
- Xircus Registry Authentication with JWT Token and Referral Tracking
- Data Tables
- Data Tabs
- Cards
- Countdown
- Drawers
- Column Containers
- Gradients
- Forms

### Crypto Specific Widgets
- Token Asset Tracker (LocalStorage)
- ERC20 Widget
- NFT Item Widget
- IPFS Uploader (Infura)
- Auction Widget
- Marketplace Listings
- DEX Swap Widget
- Predict Widget
- Contract Deploy Widget