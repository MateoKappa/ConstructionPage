import Head from "next/head";
import styles from "./Layout.module.scss";
import {useRouter} from "next/router";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Script from "next/script";
const Layout = ({children}) => {
  const router = useRouter();
  console.log(router);

  return (
    <div className={styles.layout}>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine"
        ></link>
        <title>Destin Coffee House</title>
        <link rel="icon" type="image/x-icon"></link>
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
        <link
          href="https://pro.fontawesome.com/releases/v6.0.0-beta3/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main> <Footer />
    </div>
  );
};

export default Layout;
