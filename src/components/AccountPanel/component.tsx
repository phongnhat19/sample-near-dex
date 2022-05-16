import {
  Button,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
} from '@chakra-ui/react'
import { useWalletSelector } from 'contexts/WalletSelectorContext';
import { truncate } from 'utils/string';

export default () => {
  const { selector, accountId, logoutWallet } = useWalletSelector();
  const handleLogout = async () => {
    // try {
    //   await selector.signOut()
    // } catch (error) {
    //   console.log(error)
    // }

    await logoutWallet();
  }

  return (
    <Flex
      // maxWidth="300px"
      // backgroundColor="green.500"
      alignItems="center"
      justifyContent="space-between"
      // padding="8px"
    >
      <Popover
        returnFocusOnClose={false}
        placement='bottom'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button colorScheme='green'>
            <Text color='white'>
              {truncate(accountId, 16, -1)}
            </Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>
            Are you sure you want to continue with your action?
          </PopoverBody>
          <PopoverFooter display='flex' flexDirection="column">
            <Button onClick={handleLogout} colorScheme='red'>Logout</Button>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Flex>
  )
};
