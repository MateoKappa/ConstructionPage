import styles from "./ImageGallery.module.scss";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import useWindowSize from "../Window/Window";

import React from "react";

function ImageGallery({images, SetCurrentImage}) {
  const [imageChecker, SetImageChecker] = useState(true);
  const [imageClicker, SetImageClicker] = useState(true);
  console.log(imageChecker);
  return (
    <div className={styles.Container}>
      <AnimatePresence exitBeforeEnter>
        {imageClicker ? (
          <div>
            <motion.img
              key={imageChecker}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.3}}
              exit={{
                opacity: 0,
                transition: {
                  duration: "0.2",
                },
              }}
              src={images.images}
              onClick={() => {
                {
                  SetImageClicker(!imageClicker),
                    SetImageChecker(!imageChecker);
                }
              }}
            />
            <div className={styles.Eye}>
              <i
                onClick={() => SetCurrentImage([images.images, images.image2])}
                className="fas fa-eye"
              />
            </div>
          </div>
        ) : (
          <div>
            <motion.img
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.3}}
              exit={{
                opacity: 0,
                transition: {
                  duration: "0.2",
                },
              }}
              src={images.image2}
              onClick={() => {
                {
                  SetImageClicker(!imageClicker),
                    SetImageChecker(!imageChecker);
                }
              }}
            />
            <div className={styles.Eye}>
              <i
                onClick={() => SetCurrentImage([images.images, images.image2])}
                className="fas fa-eye"
              />
            </div>
          </div>
        )}
      </AnimatePresence>

      <div className={styles.Buttons}>
        <i
          className="fa-regular fa-circle"
          onClick={() => {
            {
              SetImageClicker(!imageClicker), SetImageChecker(!imageChecker);
            }
          }}
          style={
            imageChecker
              ? {
                  backgroundColor: "rgb(255, 252, 144)",
                  color: "rgb(255, 252, 144)",
                }
              : {
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "rgb(255, 252, 255)",
                }
          }
        />
        <i
          className="fa-regular fa-circle"
          onClick={() => {
            {
              SetImageClicker(!imageClicker), SetImageChecker(!imageChecker);
            }
          }}
          style={
            imageChecker
              ? {
                  backgroundColor: "rgb(255, 255, 255)",
                  color: "rgb(255, 252, 255)",
                }
              : {
                  backgroundColor: "rgb(255, 252, 144)",
                  color: "rgb(255, 252, 144)",
                }
          }
        />
      </div>
    </div>
  );
}

export default ImageGallery;
