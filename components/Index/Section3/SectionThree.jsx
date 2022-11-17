import {useState} from "react";
import styles from "./SectionThree.module.scss";
import {motion, AnimatePresence} from "framer-motion";
import {ColorPicker, useColor} from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import Window from "../../Window/Window";

import ColorPicker1 from "../../ColorPicker/ColorPicker";

function SectionThree() {
  const [color, setColor] = useColor("hex", "#dfb6b6");
  const {width, height} = Window();
  const [color1, setColor1] = useState("#dfb2b6");
  console.log(color1);
  return (
    <div className={styles.SectionThree}>
      {width > 600 ? (
        <span className={styles.lottiePlayer}>
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_f839c3jz.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </span>
      ) : null}
      {/* left side background  */}
      <div
        className={styles.BackLeftSide}
        style={
          width > 800
            ? {
                backgroundColor: color.hex,
              }
            : {backgroundColor: color1}
        }
      ></div>
      {/* right side background  */}
      <div
        className={styles.BackRightSide}
        style={{
          backgroundColor: color.hex,
        }}
      ></div>
      <div className={styles.SectionThreeDisplay}>
        <h1>Choose your Color</h1>
        <div className={styles.Color_Palette}>
          <div className={styles.ColorPicker}>
            <div>
              {width > 800 ? (
                <ColorPicker
                  width={width < 800 ? (width * 80) / 100 : width / 3.5}
                  height={width < 800 ? 250 : height / 2.8}
                  color={color}
                  onChange={setColor}
                  hideHSV
                  dark
                />
              ) : (
                <ColorPicker1 setColor1={setColor1} />
              )}
            </div>
          </div>
          {/* color palette */}

          <div className={styles.Palette}>
            <div
              style={
                width > 800
                  ? {
                      backgroundColor: color.hex,
                    }
                  : {backgroundColor: color1}
              }
            ></div>
            <div
              style={{borderTop: "2px solid black", backgroundColor: "white"}}
            >
              {color.hex}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
