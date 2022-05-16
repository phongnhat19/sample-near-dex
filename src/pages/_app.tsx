import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from "recoil";
import dynamic from 'next/dynamic'
// import {WalletSelectorContextProvider} from 'contexts/WalletSelectorContext'

import theme from '../theme'
import { AppProps } from 'next/app'

const WalletSelectorContextProvider = dynamic(
  () => import('contexts/WalletSelectorContext'),
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <WalletSelectorContextProvider>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </WalletSelectorContextProvider>
    </RecoilRoot>
  )
}

export default MyApp
