import React from "react";
import {useState} from "react";
import styles from "./SectionTwo.module.scss";
import {motion, AnimatePresence} from "framer-motion";

function SectionTwo() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const images = [
    "https://scontent.fskg1-2.fna.fbcdn.net/v/t39.30808-6/273160253_5173593966007043_3249542806498463870_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=CKbh0BYY4mEAX9oz4o0&_nc_ht=scontent.fskg1-2.fna&oh=00_AfBAOgns0t21Gyh3Tb8oUg61S5O56fFfB7xrfyKfdlZTzw&oe=63B84CDD",
    "https://i.imgur.com/tIRyaKl.jpg",
    "https://i.imgur.com/srBHWs8.jpg",
    "https://scontent.fskg1-1.fna.fbcdn.net/v/t39.30808-6/273052078_5173694802663626_7886629078744781617_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=hFxVolAPeoUAX_CNnzS&_nc_ht=scontent.fskg1-1.fna&oh=00_AfAZOZV_Fx2TvlCkd5U56Owksf3T5mhixoblP3ROewHaiw&oe=63B78C7E",
    "https://i.imgur.com/YQTHWBo.jpg",
    "https://i.imgur.com/9aKTkKE.jpg",
    "https://i.imgur.com/GZLOTX9.jpg",
    "https://i.imgur.com/p1SFIsm.png",
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
              ΓΥΨΟΣΑΝΙΔΑ
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
              ΜΟΝΩΣΕΙΣ ΤΑΡΑΤΣΙΩΝ
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
                setCounter(6);
              }}
            >
              ΣΟΒΑΤΙΣΜΑΤΑ
            </button>
            <button
              onClick={() => {
                setCounter(7);
              }}
            >
              ΠΛΑΚΑΚΙΑ
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
