import type { AppProps } from "next/app";
import Navbar from "../components/Navbars/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
