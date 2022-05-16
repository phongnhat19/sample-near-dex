import { Flex, Text, IconButton, Button } from '@chakra-ui/react';
import { UpDownIcon } from '@chakra-ui/icons';
import { inputTokenState, outputTokenState, swapInputState } from 'atoms/swap';
import { Container, DarkModeSwitch, Header, Footer, Card, TokenInput, SelectTokenDropdown, ConnectWalletButton } from 'components'
import { useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { useWalletSelector } from 'contexts/WalletSelectorContext';

export default () => {
  const { accountId } = useWalletSelector();
  const [inputToken, setInputToken] = useRecoilState(inputTokenState)
  const [outputToken, setOutputToken] = useRecoilState(outputTokenState)

  const [swapInput, setSwapInput] = useRecoilState(swapInputState);

  const swapInputOutputToken = useCallback(() => {
    const tempInputToken = {...inputToken}
    setInputToken(outputToken)
    setOutputToken(tempInputToken)
    setSwapInput("")
  }, [inputToken, outputToken, setInputToken, setOutputToken, setSwapInput]);

  return (
    <Container height="100vh">
      <DarkModeSwitch />
      <Header />
      <Flex
        flex="1"
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Card
          flexDirection="column"
        >
          <Text as="strong">
            You pay
          </Text>
          <TokenInput
            token={inputToken}
            onSelectToken={(newToken) => setInputToken(newToken)}
            marginBottom="12px"
            amount={swapInput}
            onChangeAmount={(newAmount) => setSwapInput(newAmount)}
          />
          <Flex justifyContent="center">
            <IconButton
              aria-label='Swap token'
              icon={<UpDownIcon />}
              isRound
              onClick={swapInputOutputToken}
            />
          </Flex>
          <Text as="strong">
            You receive
          </Text>
          <SelectTokenDropdown
            width="100px"
            my="4px"
            marginLeft="8px"
            selectedToken={outputToken}
            onSelectToken={(newToken) => setOutputToken(newToken)}
          />
        </Card>
        <Flex
          py="36px"
          width="420px"
        >
          {!accountId ? (
            <ConnectWalletButton width="100%" size="lg" />
          ) : (
            <Button
              colorScheme="green"
              width="100%"
              size="lg"
            >
              Swap
            </Button>
          )}
        </Flex>
      </Flex>
      <Footer />
    </Container>
  )
}