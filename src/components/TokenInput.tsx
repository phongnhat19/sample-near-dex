import { Flex, Input, FlexProps } from '@chakra-ui/react'
import { Token } from 'types/token'
import { SelectTokenDropdown } from 'components'

export const TokenInput = ({
  token,
  onSelectToken,
  amount,
  onChangeAmount,
  ...overrideProps
}: {
  token: Token;
  onSelectToken: (newToken: Token) => void;
  amount: string;
  onChangeAmount: (newAmount: string) => void;
} & FlexProps) => (
  <Flex
    alignItems="center"
    justifyContent="center"
    padding="8px"
    borderRadius="12px"
    my="4px"
    bg="gray.100"
    color="black"
    _dark={{
      bg: 'gray.700',
      color: 'white',
    }}
    transition="all 0.15s ease-out"
    {...overrideProps}
  >
    <SelectTokenDropdown onSelectToken={onSelectToken} selectedToken={token} />
    <Input
      value={amount}
      onChange={(e) => onChangeAmount(e.target.value)}
      variant='unstyled'
      placeholder='0.00'
      px="4px"
      textAlign="right"
    />
  </Flex>
)