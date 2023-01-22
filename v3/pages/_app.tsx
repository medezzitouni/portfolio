import type { AppProps } from 'next/app'
import { wrapper } from '~store'

// @ts-ignore
import(`~styles/${process.env.BACKEND_URL == '/portfolio/' ? 'portfolio-' : ''}fonts.css`);
import '~styles/globals.css'


function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);