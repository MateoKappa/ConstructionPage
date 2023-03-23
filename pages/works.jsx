import React from "react";
import { useState } from "react";
import styles from "../components/Work/Work.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import WorkImages from "../components/Images/WorkImages.jsx";
import LastComponent from "../components/LastComponent/LastComponent.jsx";
import Gallery from "react-photo-gallery";
function Works() {
  const [CurrentImage, SetCurrentImage] = useState(null);
  const [number, SetNumber] = useState(0);
  let images = WorkImages().images;

  const TheNumber = () => {
    if (number == 0) {
      SetNumber(1);
    } else {
      SetNumber(0);
    }
  };
  const FirstSection = () => {
    return (
      <div className={styles.FirstSection}>
        <img src="https://i.imgur.com/uVUwHPQ.jpg" />
        <h2>Ανακαίνισεις Σπιτιού</h2>
        <button>Επικοινωνηστε μαζι μας</button>
      </div>
    );
  };

  return images ? (
    <div className={styles.FullPage}>
      <FirstSection /> ;
      {CurrentImage == null ? (
        <div className={styles.SectionTwo}>
          <Gallery photos={images} direction={"column"} margin={4} />
        </div>
      ) : (
        // {/* PAGE TWO  */}
        <div className={styles.Page}>
          <div className={styles.Image}>
            <AnimatePresence exitBeforeEnter>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0 }}
                key={number}
                className={styles.Image}
                src={CurrentImage[number]}
                onClick={() => TheNumber()}
              />
            </AnimatePresence>
            <i
              onClick={() => {
                SetCurrentImage(null), SetNumber(0);
              }}
              className="fas fa-times"
              id="X"
            ></i>
          </div>
        </div>
      )}
      <LastComponent
        Title="Κοιτάξτε και κάποιες απo τις ζωγραφιές μας !"
        Text=" Εδω παρουσιάζουμε κάποιες τοιχογραφίες απο εναν καλλιτέχνη που παρέχεται απο το συνεργείο μας. Ο οποίος ειναι διαθέσιμος σε καθε ανακαίνιση σπιτιού"
        Image="/Paintings_.png"
        Right={false}
        Page="/painting"
      />
    </div>
  ) : null;
}

export default Works;
