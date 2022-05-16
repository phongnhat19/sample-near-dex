import { Flex, FlexProps, Text } from '@chakra-ui/react'

export const Card = (props: FlexProps) => (
  <Flex
    px="24px"
    py="32px"
    borderRadius="0.75rem"
    bg="gray.50"
    color="black"
    width="420px"
    _dark={{
      bg: 'gray.900',
      color: 'white',
    }}
    transition="all 0.15s ease-out"
    boxShadow='xl'
    {...props}
  />
)
