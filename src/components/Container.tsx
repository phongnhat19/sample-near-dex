import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    bg="gray.100"
    color="black"
    _dark={{
      bg: 'gray.700',
      color: 'white',
    }}
    transition="all 0.15s ease-out"
    {...props}
  />
)
