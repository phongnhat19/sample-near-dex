import dynamic from 'next/dynamic'

export const AccountPanel = dynamic(
  () => import('./component'),
  { ssr: false }
)
