import {
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuList,
  Button,
  MenuItem,
  Image,
  Flex
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Token } from 'types/token';
import { SUPPORTED_TOKENS } from 'config/supportedTokens';

export const SelectTokenDropdown = ({selectedToken, onSelectToken, ...overrideProps}: {
  selectedToken: Token;
  onSelectToken: (newToken: Token) => void;
} & MenuButtonProps) => {
  return (
    <Menu>
      <MenuButton
        minWidth="120px"
        as={Button}
        rightIcon={<ChevronDownIcon />}
        backgroundColor="transparent"
        size="sm"
        {...overrideProps}
      >
        <Flex alignItems="center">
          <Image
            boxSize='1.5rem'
            borderRadius='full'
            src={selectedToken.logo}
            alt={selectedToken.name}
            mr='12px'
          />
          {selectedToken.symbol}
        </Flex>
      </MenuButton>
      <MenuList>
        {
          SUPPORTED_TOKENS.map((token) => {
            return (
              <MenuItem key={`token-${token.symbol}`} onClick={() => onSelectToken(token)} minH='48px'>
                <Image
                  boxSize='1.5rem'
                  borderRadius='full'
                  src={token.logo}
                  alt={token.name}
                  mr='12px'
                />
                <span>{token.symbol}</span>
              </MenuItem>
            )
          })
        }
      </MenuList>
    </Menu>
  );
};