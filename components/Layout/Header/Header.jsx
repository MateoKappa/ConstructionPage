import styles from "./Header.module.scss";
import {useState} from "react";
import Link from "next/link";
import Window from "../../Window/Window";

function Header() {
  const {height, width} = Window();
  const [shake, setShake] = useState(false);

  return width ? (
    <div>
      {width > 900 ? (
        <div className={styles.header}>
          <img src="/favicon.ico" />
          <div className={styles.components}>
            <Link href="/">
              <h4 id="arxikh">Αρχικη</h4>
            </Link>
            <Link href="/works">
              <h4 id="douleies"> Δουλειες</h4>
            </Link>
            <Link href="/painting">
              <h4 id="zwgrafies"> Ζωγραφιες</h4>
            </Link>
            <Link href="/contact">
              <h4 id="epikoinwnia"> Επικοινωνια</h4>
            </Link>
          </div>
          <div className={styles.telephone}>
            <i className="fa-solid fa-phone" /> <p> +30 6947742687</p>
          </div>
        </div>
      ) : (
        <div className={styles.tel_header}>
          <img src="/favicon.ico" />
          <div className={styles.tel_components}>
            <Link
              href="/"
              className={shake ? `${styles.shake}` : `${styles.shake}`}
            >
              <i className="fa-solid fa-house-blank"></i>
            </Link>
            <Link href="/works">
              <i className="fa-solid fa-mug-hot"></i>
            </Link>
            <Link href="/painting">
              <i className="fa-solid fa-envelope"></i>
            </Link>
            <Link href="/contact">
              <i className="fa-solid fa-images"></i>
            </Link>
          </div>
          <div className={styles.tel_telephone}>
            <a href="tel:6947742687">
              <i className="fa-solid fa-phone" />
            </a>
          </div>
        </div>
      )}
    </div>
  ) : null;
}

export default Header;
