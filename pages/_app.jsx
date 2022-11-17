import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
function MyApp({Component, pageProps, router}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
