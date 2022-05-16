import { Flex, FlexProps, Box, Heading, Spacer, ButtonGroup } from '@chakra-ui/react'
import { ConnectWalletButton, AccountPanel } from 'components'
import { useWalletSelector } from 'contexts/WalletSelectorContext';

export const Header = (props: FlexProps) => {
  const { accountId } = useWalletSelector();
  return (
    <Flex
      as="header"
      width="100%"
      py="12px"
      px="24px"
      {...props}
    >
      <Box p='2'>
        <Heading size='md'>NEAR Dex</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        {!accountId ? (
          <ConnectWalletButton />
        ) : (
          <AccountPanel />
        )}
      </ButtonGroup>
    </Flex>
  )
}


export default Header