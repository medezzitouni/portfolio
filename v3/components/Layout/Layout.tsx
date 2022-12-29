import type { NextPage, } from 'next'
import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';

const Layout: NextPage<LayoutProps> = ({ header=<Header />, children,  footer=<Footer /> }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Methe</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href={process.env.BACKEND_URL + "/favicon.ico" }/>
       </Head>
        <main className='mx-auto lg:min-h-screen bg-primary' >
          { header }
          { children }
          { footer }
        </main>
    </>
  )
}

export default Layout;