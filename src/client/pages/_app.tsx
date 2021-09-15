import { NextPage } from 'next';
import { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { store } from 'redux/storeConfig/store';

import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx.min';

// ** React Perfect Scrollbar
// import 'react-perfect-scrollbar/dist/css/styles.css';

// ** React Toastify
// import '@styles/react/libs/toastify/toastify.scss';

// ** Core styles
import '@core/assets/fonts/feather/iconfont.css';
import '@core/scss/core.scss';
import 'assets/scss/style.scss';

const CustomApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default CustomApp;
