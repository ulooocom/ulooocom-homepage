import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        你好, 我是在上海的 web/php/magento 开发者!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Robin Fu
          </Heading>
          <p>数字工匠 ( 创作者 / 开发者 / 设计者 )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/ulooocom.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          工作经历
        </Heading>
        <Paragraph>
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>Inkdrop</Link>
          </NextLink>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <NextLink href="https://www.youtube.com/devaslife" passHref>
            <Link target="_blank">Dev as Life</Link>
          </NextLink>
          &quot; has more than 100k subscribers.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          经历
        </Heading>
        <BioSection>
          <BioYear>2005</BioYear>
          学士学位 · 湖南文理学院
        </BioSection>
        <BioSection>
          <BioYear>2005-2007</BioYear>
          资讯技术部 · 上海彪记有限公司
        </BioSection>
        <BioSection>
          <BioYear>2007-2009</BioYear>
          技术部 · 上海壁系咨询有限公司
        </BioSection>
        <BioSection>
          <BioYear>2009-2010</BioYear>
          技术部 · 旅行者传媒有限公司
        </BioSection>
        <BioSection>
          <BioYear>2010-2011</BioYear>
          技术部 · 上海游龙有限公司
        </BioSection>
        <BioSection>
          <BioYear>2011-2016</BioYear>
          优e网 · 技术部 · 上海优怡商业有限公司
        </BioSection>
        <BioSection>
          <BioYear>2017 至今</BioYear>
          技术部 · 上海第一秒信息技术有限公司
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          艺术, 音乐,{' '}
          <Link href="" target="_blank">
            视频
          </Link>
          ,{' '}
          <Link href="#" target="_blank">
            摄影
          </Link>
          , 机器学习
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          线上的我
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/ulooocom" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @ulooocom
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/ulooocom" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @ulooocom (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/ulooocom" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @ulooocom
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://space.bilibili.com/479701565"
            title="ulooocom"
            thumbnail={thumbYouTube}
          >
            我的 bilibili 频道 (&gt;10 订阅)
          </GridItem>
          <GridItem
            href="https://links.ulooo.com/"
            title="links"
            thumbnail={thumbInkdrop}
          >
            我的 links 页面
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
