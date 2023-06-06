// import '@component/styles/globals.css'
import React, { useState } from 'react';
import { SSRProvider } from 'react-bootstrap'
import '../scss/globals.scss'
import type { AppProps } from 'next/app'
import { LanguageContext } from '../../components/LanguageContext';

export default function App({ Component, pageProps }: AppProps) {
  const [currentLanguage, setCurrentLanguage] = useState<string>('EN');

  return (
    <SSRProvider>
      <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
        <Component {...pageProps} />
      </LanguageContext.Provider>
    </SSRProvider>
  );

}
