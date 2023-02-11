import Head from 'next/head'
import Header from './Header';
import Footer from './Footer';
import { LayoutProps } from '@types';
import { FunctionComponent } from 'react';
import { BASE_URL } from '~lib/constants';

const Layout: FunctionComponent<LayoutProps> = ({ header=<Header />, children,  footer=<Footer /> }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Methe</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href={BASE_URL + "/favicon.ico" }/>
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