import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import Script from "next/script";
function MyApp({Component, pageProps, router}) {
  return (
    <Layout>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
