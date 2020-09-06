import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalNavi from '../components/common/globalnavi'
import 'sanitize.css'

const theme = {}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalNavi />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
