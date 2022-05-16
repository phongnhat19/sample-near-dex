import { Button, ButtonProps } from '@chakra-ui/react'
import { useWalletSelector } from 'contexts/WalletSelectorContext';
import { useEffect } from 'react';

export default (props: ButtonProps) => {
  const { accounts, selector, accountId } = useWalletSelector();
  const handleConnect = async () => {
    selector.show()
  }

  useEffect(() => {
    console.log('accounts', accounts)
  }, [accounts]);

  useEffect(() => {
    console.log('accountId', accountId)
  }, [accountId]);

  return (
    <Button onClick={handleConnect} colorScheme='green' {...props}>Connect Wallet</Button>
  )
};
