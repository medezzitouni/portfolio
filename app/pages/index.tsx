import type { NextPage } from 'next'
import Layout from '../components/Layout'
import ComingSoon from './comingSoon'

const Home: NextPage = () => {
  return (
    <Layout>
      <ComingSoon />
    </Layout>
  )
}

export default Home
