import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">找不到页面</Heading>
      <Text>你访问的页面不存在!</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="teal">回到首页</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
