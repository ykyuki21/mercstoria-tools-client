import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalNavi from '../components/common/globalnavi';
// TODO: sanitizeをどうするか考える
// eslint-disable-next-line import/no-extraneous-dependencies
import 'sanitize.css';

const theme = {};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalNavi />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
