import React from "react";
import ImageGallery from "../components/ImageGallery/ImageGallery.jsx";
import {useState} from "react";
import styles from "../components/Work/Work.module.scss";
import {AnimatePresence, motion} from "framer-motion";
import WorkImages from "../components/Images/WorkImages.jsx";

import LastComponent from "../components/LastComponent/LastComponent.jsx";

function Works() {
  const [CurrentImage, SetCurrentImage] = useState(null);
  const [number, SetNumber] = useState(0);
  let images = WorkImages().images;
  console.log(images);
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
        <div className={styles.Text_Animation}>
          <div className={styles.lottie}>
            <lottie-player
              src="https://lottie.host/d14e9471-3f2d-4555-834c-eea6215af87d/dWULRE2zEi.json"
              background="transparent"
              style={{marginBottom: "-12px"}}
              speed="0.8"
              loop
              autoplay
            ></lottie-player>
          </div>
          <h2>
            Εδώ σας παρουσιάζουμε κάποια απο το έργα που πραγματοποιήθηκαν με
            την πάροδο του χρόνου.Οι δουλειές που παρουσιάζονται είναι
            ολοκληρωμένες και ανέβηκαν με την συναίνεση του ιδιοκτήτη
          </h2>
        </div>

        <img src="/WallPainTransparent.png" />
      </div>
    );
  };

  return images ? (
    <div className={styles.FullPage}>
      <div className={styles.RightBackground}></div>
      <div className={styles.LeftBackground}></div>
      {/* SECTION ONE  */}
      <FirstSection />
      {/* SECTION TWO  */}
      {CurrentImage == null ? (
        <div className={styles.SectionTwo}>
          <div className={styles.RightBackground}></div>
          <div className={styles.LeftBackground}></div>
          <div className={styles.ImageGrid}>
            {images.map((images, index) => (
              <ImageGallery
                images={images}
                SetCurrentImage={SetCurrentImage}
                key={index}
              />
            ))}
          </div>
        </div>
      ) : (
        // {/* PAGE TWO  */}
        <div className={styles.Page}>
          <div className={styles.Image}>
            <AnimatePresence exitBeforeEnter>
              <motion.img
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2}}
                exit={{opacity: 0}}
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
