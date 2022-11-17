import React, {useEffect, useState} from "react";
import reactCSS from "reactcss";
import {SketchPicker} from "react-color";

const SketchExample = ({setColor1}) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({r: "241", g: "112", b: "19", a: "1"});

  console.log(setColor1);
  const styles = reactCSS({
    default: {
      color: {
        width: "0px",
        height: "0px",
        borderRadius: "0px",
      },
      swatch: {
        padding: "0px",
        borderRadius: "1px",
        boxShadow: "0 0 0 0px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
        backgroundColor: "black",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div
            style={styles.cover}
            onClick={() => setDisplayColorPicker(false)}
          />
          <SketchPicker
            color={color}
            onChange={(color) => {
              setColor(color.hex);
            }}
          />
        </div>
      ) : (
        <div>
          {" "}
          <SketchPicker
            color={color}
            onChange={(color) => {
              {
                setColor(color.hex), setColor1(color.hex);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SketchExample;
