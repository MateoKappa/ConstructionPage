import styles from "./ImageGallery.module.scss";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

import React from "react";

function ImageGallery({images, SetCurrentImage}) {
  const [imageChecker, SetImageChecker] = useState(true);
  const [imageClicker, SetImageClicker] = useState(true);
  console.log(images);
  console.log(imageChecker);
  return (
    <div className={styles.Container}>
      <AnimatePresence exitBeforeEnter>
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
                SetImageClicker(!imageClicker), SetImageChecker(!imageChecker);
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
      </AnimatePresence>
    </div>
  );
}

export default ImageGallery;
