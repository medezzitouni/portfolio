import type { NextPage } from 'next'
import Layout from '../components/Layout'
import ComingSoon from '../components/comingSoon'
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
