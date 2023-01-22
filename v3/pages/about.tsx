import { NextPage } from 'next'
import React from 'react'
import CommingSoon from '../components/CommingSoon'
import Layout from 'components/Layout/Layout'

const About: NextPage = () => {
  return (
    <Layout>
      <div className='h-screen bg-[wheat] '>
        <CommingSoon />
      </div>
    </Layout>
  )
}

export default About;

