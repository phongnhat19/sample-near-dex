import { Token } from "types/token";

export const SUPPORTED_TOKENS: Token[] = [
  {
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
    name: 'USD Circle',
    symbol: 'USDC',
    isNative: false,
    address: 'a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near'
  },
  {
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6535.png',
    name: 'NEAR Protocol',
    symbol: 'NEAR',
    isNative: true,
    address: ''
  }
]