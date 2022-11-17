import React from "react";
import {useState} from "react";
import styles from "./SectionTwo.module.scss";
import {motion, AnimatePresence} from "framer-motion";

function SectionTwo() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const images = [
    "https://i.imgur.com/FlPJwY7.jpg",
    "https://i.imgur.com/tIRyaKl.jpg",
    "https://i.imgur.com/srBHWs8.jpg",
    "https://i.imgur.com/1TvPYxL.jpg",
    "https://i.imgur.com/ztNIJwo.jpg",
    "https://i.imgur.com/9aKTkKE.jpg",
  ];
  const [change, setChange] = useState(true);
  const [imagechange, setImageChange] = useState(true);
  return (
    <div className={styles.SectionTwo}>
      {/* right background */}
      <div
        style={{
          position: "absolute",
          width: "50%",
          backgroundColor: "rgba(87, 185, 184, 0.248)",
          height: "100%",
          right: 0,
          zIndex: -10,
          clipPath: "polygon(51% 0, 120% 0, 75% 100%, 0% 100%)",
        }}
      ></div>
      {/* left background  */}
      <div
        style={{
          position: "absolute",
          width: "25%",
          backgroundColor: "rgba(87, 185, 184, 0.248)",
          height: "100%",
          left: -90,
          zIndex: -15,
          clipPath: "  polygon(35% 0, 81.8% 0%, -20% 100%, -58% 92%)",
        }}
      ></div>
      {/* paint animation  */}
      <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_ggjwtiEevl.json"
        background="transparent"
        speed="0.55"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          height: "100%",
          transform: "rotate(120deg)",
          left: 600,
        }}
        autoplay
      ></lottie-player>

      {/* Worker animation */}
      <div className={styles.WorkerAnimation}>
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_twxv8mn4.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <div className={styles.SectionTwoDisplay}>
        <div className={styles.SectionTwoLeft}>
          <h2>Θέλετε να ανακαινίσετε η να επισκευάσετε την κατοικία σας ?</h2>
          <div className={styles.Buttons}>
            <button
              onClick={() => {
                setCounter(0) & setImageChange(true);
              }}
            >
              ΕΛΑΙΟΧΡΩΜΑΤΙΣΜΟΙ
            </button>
            <button
              onClick={() => {
                setCounter(1) & setImageChange(false);
              }}
            >
              {" "}
              ΑΝΑΠΑΛΑΙΩΣΗ ΕΠΙΠΛΩΝ
            </button>

            <button
              onClick={() => {
                setCounter(2);
              }}
            >
              ΜΕΡΕΜΕΤΙΑ
            </button>
            <button
              onClick={() => {
                setCounter(3);
              }}
            >
              ΤΕΧΝΟΤΡΟΠΙΕΣ
            </button>
            <button
              onClick={() => {
                setCounter(4);
              }}
            >
              ΜΟΝΟΣΕΙΣ ΤΑΡΑΤΣΙΩΝ
            </button>
            <button
              onClick={() => {
                setCounter(5);
              }}
            >
              ΖΩΓΡΑΦΙΕΣ
            </button>
            <button
              onClick={() => {
                setCounter(0);
              }}
            >
              ΑΝΑΠΑΛΑΙΩΣΗ ΕΠΙΠΛΩΝ
            </button>
            <button
              onClick={() => {
                setCounter(0);
              }}
            >
              ΑΝΑΠΑΛΑΙΩΣΗ ΕΠΙΠΛΩΝ
            </button>
          </div>
        </div>
        <div className={styles.SectionTwoRight}>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              className={styles.image}
              key={images[counter]}
              initial={{scale: 0, x: 1000}}
              animate={{scale: 1, x: 0}}
              transition={{duration: 0.8}}
              exit={{
                opacity: 0,
                transition: {
                  duration: "0.2",
                },
              }}
              src={images[counter]}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
