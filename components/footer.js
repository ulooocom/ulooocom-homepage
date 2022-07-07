import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      <p></p>&copy; {new Date().getFullYear()} Ulooocom. 保留所有权利. Thanks to <a href="https://www.craftz.dog/" >@craftzdog</a>
    </Box>
  )
}

export default Footer
