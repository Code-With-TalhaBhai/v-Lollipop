import '../styles/globals.css'
// import styles from '../styles/Home.module.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from '../client/client'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
    <div>
    <h1 className="lollyH">virtual lollipop</h1>
    <p className="lollyP">because we all know someone
      who deserves some sugar.</p>
  <Component {...pageProps} />
  </div>
  </ApolloProvider>
)}

export default MyApp
