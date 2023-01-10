import '../styles/globals.css';
import Header from '@components/Header';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Script from 'next/Script';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZN80WG7H93" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T127LZTNTQ');
        `}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
