import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbdockerenv from '../public/images/contents/magentoDevOnDokcerMacV22.jpg'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        热门内容
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="使用 Docker 快速创建 Magento 多版本开发环境"
            thumbnail={thumbdockerenv}
            href="https://www.bilibili.com/video/BV1DT4y1z7Z4/"
          />
          
        </SimpleGrid>
      </Section>

      

      
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
