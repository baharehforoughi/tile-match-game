import "app/globals.css";
import type { AppProps } from "next/app"; // Import the type definition for AppProps

function MyApp({ Component, pageProps }: AppProps) {
  // Use the AppProps type for component props
  return <Component {...pageProps} />;
}

export default MyApp;
