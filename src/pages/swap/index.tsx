import dynamic from 'next/dynamic';

const SwapPage = dynamic(
  () => import('./page'),
  { ssr: false }
)

export default SwapPage;
