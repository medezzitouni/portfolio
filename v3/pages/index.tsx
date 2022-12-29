// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import Home from '../components/Home';

// const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <Layout
      header={null}
      footer={null}
    >
      <Home />
    </Layout>
  )
}