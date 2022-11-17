import styles from "./Footer.module.scss";
import Map from "../../Map/Map";
export default function Footer() {
  return (
    <div className={styles.page}>
      <div
        style={{
          height: 20,

          backgroundColor: "rgb(92 92 92 / 17%)",
        }}
      ></div>
      <div className={styles.container}>
        <div className={styles.right}>
          Διεύθυνση:
          <br />· ΒΟΛΟΣ <br />
          · Τηλέφωνο: 6987963320 <br /> · Ωρες Επικοινωνιας: 08:00 - 20:00
        </div>
        <div className={styles.middle}>
          <div className={styles.image}>
            <Map prop={10} />
          </div>
        </div>
        <div className={styles.left}>
          Προσφερουμε:
          <br />· Εμπειρια πανω απο 30 χρονια! <br />
          · Εστιαση στην λεπτομερια <br />· Γρηγορη παραδοση
        </div>
      </div>
    </div>
  );
}
