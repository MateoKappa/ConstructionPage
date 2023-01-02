import {useState} from "react";
import styles from "./SectionOne.module.scss";
import {motion, AnimatePresence} from "framer-motion";
import Window from "../../Window/Window";
function SectionOne() {
  const {width, height} = Window();

  return (
    <div
      style={{
        position: "relative",
        marginBottom: 0,
        zIndex: -5,
      }}
    >
      <div className={styles.SectionOne}>
        <div className={styles.title}>
          {" "}
          <div className={styles.text}>
            ΑΝΑΚΑΙΝΙΣΕΙΣ EΠΙΣΚΕΥΕΣ
            <p>
              Η εταιρεία μας DreamHouseGr δραστηριοποιείται σε ολη την Ελλαδα
              στην ανακαίνιση σπιτιού , οι υπηρεσιες που προσφερουμε ειναι :{" "}
              <br />
              <br />
              Ελαιοχρωματισμοι, σοβατισματα, επενδυση πετρας, γυψοσανιδα,
              μονωσεις ταρατσιων, πλακακια, τεχνοτροπιες, ζωγραφιες, αναπαλαιωση
              επιπλων.
              <br />
              <br />Η εταιρια μας δραστηριοποιείται εδω και 30 χρονια και
              συνεργαζεται με υδραυλικους και ηλεκτρολογους <br /> ωστε να
              φροντισουμε το εργο μας να <br />
              πραγματοποιηθει ταχυτητατα και <br /> αποτελεσματικα{" "}
            </p>{" "}
          </div>
        </div>
        <div>
          <AnimatePresence exitBeforeEnter>
            <div className={styles.lottie}>
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_qcrbuch7.json"
                background="transparent"
                style={{marginBottom: "-12px"}}
                speed="1.25"
                loop
                autoplay
              ></lottie-player>
            </div>
            {width < 780 || (height > 940 && width < 1600) ? null : (
              <img
                src="/images/background.svg"
                className={styles.backgroundSVG}
                style={{
                  position: "absolute",
                  right: -0,
                  background: "cover",
                  clipPath: "polygon(38% 1%, 97% 1%, 81.2% 100%, 21.5% 100%)",
                  zIndex: -2,
                }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
