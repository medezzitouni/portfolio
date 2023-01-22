import type { AppProps } from 'next/app'
import { wrapper } from '~store'

if(process.env.BACKEND_URL == '/portfolio/')
  import('~styles/portfolioFonts.css');
else
  import('~styles/fonts.css');
  
import '~styles/globals.css'


function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);