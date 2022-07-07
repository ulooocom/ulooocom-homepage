import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        作品
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
     
        
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          合作作品
        </Heading>
      </Section>

      

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          历史作品
        </Heading>
      </Section>

      
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
