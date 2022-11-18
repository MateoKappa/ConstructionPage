import React from "react";
import ImageGallery from "../components/ImageGallery/ImageGallery.jsx";
import {useState} from "react";
import styles from "../components/Work/Work.module.scss";
import {AnimatePresence, motion} from "framer-motion";
import WorkImages from "../components/Images/WorkImages.jsx";
import Window from "../components/Window/Window";

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
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            vitae esse modi aperiam eum cumque repellendus sapiente saepe
            tempora mollitia, error quibusdam impedit quae. Maiores quibusdam
            consequuntur nobis veniam tenetur!
          </h1>
        </div>
        <img src="/WallPainTransparent.png" />
      </div>
    );
  };

  return (
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
              <ImageGallery images={images} SetCurrentImage={SetCurrentImage} />
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
              onClick={() => SetCurrentImage(null)}
              className="fas fa-times"
              id="X"
            ></i>
            <div className={styles.Buttons}>
              <i
                className="fa-regular fa-circle"
                onClick={() => {
                  TheNumber();
                }}
                style={
                  number == 0
                    ? {
                        backgroundColor: "rgb(255, 252, 144)",
                        color: "rgb(255, 252, 144)",
                      }
                    : null
                }
              />
              <i
                className="fa-regular fa-circle"
                onClick={() => {
                  TheNumber();
                }}
                style={
                  number == 0
                    ? null
                    : {
                        backgroundColor: "rgb(255, 252, 144)",
                        color: "rgb(255, 252, 144)",
                      }
                }
              />
            </div>
            {/* <div className={styles.Buttons}>
              <i
                className="fa-regular fa-circle"
                onClick={() => {
                  TheNumber();
                }}
                style={
                  number == 0 ? {backgroundColor: "rgb(255, 252, 144)"} : null
                }
              />

              <i
                className="fa-regular fa-circle"
                onClick={() => {
                  TheNumber();
                }}
                style={
                  number == 0 ? null : {backgroundColor: "rgb(255, 252, 144)"}
                }
              />
            </div> */}
          </div>
        </div>
      )}

      <LastComponent
        Title="Κοιταξτε και καποιες απo τις ζωγραφιες μας !"
        Text="  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum nobis quidem consequatur laudantium. Laborum optio
              voluptatibus ex recusandae ratione temporibus, necessitatibus
              nihil, tempore laboriosam facilis nam modi possimus, non harum."
        Image="/Paintings_.png"
        Right={false}
        Page="/painting"
      />
    </div>
  );
}

export default Works;
