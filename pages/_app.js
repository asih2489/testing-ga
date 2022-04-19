import React from 'react'
import TagManager from 'react-gtm-module';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  React.useEffect(()=> {
    const tagManagerArgs = {
      gtmId: 'GTM-NTH8K9C'
  }
   
  TagManager.initialize(tagManagerArgs)
  },[])

  return <Component {...pageProps} />
}

export default MyApp
