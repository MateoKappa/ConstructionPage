import {lazy, useState} from "react";
import styles from "./SectionOne.module.scss";
import {motion, AnimatePresence} from "framer-motion";
import Window from "../../Window/Window";
function SectionOne() {
  const {width, height} = Window();
  const Lottie = () =>
  {
  return(
  <lottie-player
    src="https://assets7.lottiefiles.com/packages/lf20_qcrbuch7.json" 
    background="transparent"
    style={{marginBottom: "-12px"}}
    speed="1.25"
    loop
    loading="lazy"
    autoplay/>
    )
  }
  
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
            ΑΝΑΚΑΙΝΙΣΕΙΣ ΕΠΙΣΚΕΥΕΣ
            <p>
              Η εταιρεία μας DreamHouseGr δραστηριοποιείται σε όλη την Ελλάδα
              στην ανακαίνιση σπιτιού , οι υπηρεσίες που προσφέρουμε είναι :{" "}
              <br />
              <br />
              Ελαιοχρωματισμοί, σοβατίσματα, θερμοπρόσοψη, επένδυση πέτρας,
              γυψοσανίδα, μονώσεις ταρατσιών, πλακάκια, τεχνοτροπίες, ζωγραφιές,
              αναπαλαιωση επιπλων, θερμομωνοση.
              <br />
              <br />Η εταιρία μας δραστηριοποιείται εδώ και 30 χρόνια και
              συνεργάζεται με υδραυλικούς και ηλεκτρολόγους <br /> ώστε να
              φροντίσουμε το έργο μας να <br />
              πραγματοποιηθεί ταχύτατα και <br /> αποτελεσματικά{" "}
            </p>{" "}
          </div>
        </div>
        <div>
            <div className={styles.lottie}>
             <Lottie/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne;
