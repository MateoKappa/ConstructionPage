import React from "react";
import styles from "./LastComponent.module.scss";
import Link from "next/link.js";
import Window from "../Window/Window";
function LastComponent({Title, Text, Image, Right, Page}) {
  const {width, height} = Window();
  return (
    <div className={styles.SectionThree}>
      <div
        className={styles.Container}
        style={Right ? {transform: "scaleX(-1)"} : null}
      >
        <div className={styles.TextContainer}>
          {" "}
          <h1 style={Right ? {transform: "scaleX(-1)"} : null}>{Title}</h1>
          <h4 style={Right ? {transform: "scaleX(-1)"} : null}> {Text}</h4>
          {width > 1300 ? <i class="fas fa-arrow-alt-right"></i> : null}
        </div>
        <Link href={Page}>
          <img src={Image} />
        </Link>
      </div>
    </div>
  );
}

export default LastComponent;
