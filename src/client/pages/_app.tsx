import { NextPage } from 'next';
import { AppProps } from 'next/app';

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default CustomApp;
