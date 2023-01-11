import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import { LayoutProps } from '../../types';
import { FunctionComponent } from 'react';

const Layout: FunctionComponent<LayoutProps> = ({ header=<Header />, children,  footer=<Footer /> }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Methe</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href={process.env.BACKEND_URL + "/favicon.ico" }/>
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Comic+Neue&display=swap"
          rel="stylesheet"
        />
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