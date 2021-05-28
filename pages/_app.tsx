import { AppProps } from 'next/app';
import { FC } from 'react';
import '../styles/globals.css';

/**
 * The @App component is the entry point into the application. It wraps the application with the @see ChakraProvider which is a TailwindCSS inspired utility-first
 * React component library. In production, however, we may theme the application ourselves using (this can actually be done using Material UI or Chakra as well) a more "vanilla"
 * approach, such as SASS and CSS modules.
 * 
 * 
 * @param param0 
 * @returns 
 * @author jlee
 */
// function App({ Component, pageProps }) {
const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps} />
    );
}

export default App;
