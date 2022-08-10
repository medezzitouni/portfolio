import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Home from '../components/home'

const Index: NextPage = () => {
  return (
    <Layout>
      <Home />
      {/* <ComingSoon /> */}
    </Layout>
  )
}

export default Index;
