import type { NextPage, } from 'next'
import Head from 'next/head'
import { Container } from 'react-bootstrap';
import styles from '../styles/Layout.module.css'



interface LayoutProps {
  children: React.ReactNode;
}

const Layout: NextPage<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Container fluid style={{ minHeight: '100vh' }}>
      <Head>
        <title>Methe</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/portfolio/favicon.ico" />
        
      </Head>

      <main className={styles.main}>
        { children }
      </main>

      <footer>
       
      </footer>
    </Container>
  )
}

export default Layout
