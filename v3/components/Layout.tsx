import type { NextPage, } from 'next'
import Head from 'next/head'
import { ReactNode } from 'react';
// import { Container } from 'react-bootstrap';


const Layout: NextPage<LayoutProps> = ({ header, children,  footer }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Methe</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href={process.env.BACKEND_URL + "/favicon.ico" }/>
       </Head>
      <main className='mx-auto lg:min-h-screen bg-primary' >
        {header &&
          <header className="flex flex-row h-[12vh] bg-secondary">
            {header}
          </header>
        }
        {/* content  */}
        { children }
        {/* content  */}
        {footer &&
          <footer className="h-[10vh] grid place-items-center">
            {footer}
          </footer>
        }
      </main>
    </>
  )
}

export default Layout;