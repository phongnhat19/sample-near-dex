import { Flex, FlexProps, Text } from '@chakra-ui/react'

export const Footer = (props: FlexProps) => (
  <Flex as="footer" py="0.8rem" {...props}>
    <Text>NEAR Dex</Text>
  </Flex>
)
