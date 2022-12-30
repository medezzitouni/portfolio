import { NextPage } from 'next'
import { NextRouter, withRouter } from 'next/router'
import React from 'react'
import CommingSoon from '../components/CommingSoon'
import Layout from '../components/Layout/Layout'

const Article: NextPage = () => {
  return (
    <div className='h-screen bg-black'>
      <CommingSoon />
    </div>
  )
}

export default Article;

