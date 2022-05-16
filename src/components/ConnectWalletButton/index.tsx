import dynamic from 'next/dynamic'

export const ConnectWalletButton = dynamic(
  () => import('./component'),
  { ssr: false }
)
