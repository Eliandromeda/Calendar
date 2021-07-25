import React, { useState } from "react";
import { SketchPicker } from "react-color";
import styles from "./ColorPicker.module.css";

const ColorPicker = (props) => {

  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(true);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChangeColor = (color) => {
    document.querySelector("#color").style.backgroundColor = color.hex;
    props.onChangeColor({ color: color.hex });
  };

  return (
    <div className={props.style}>
      <div className={styles.swatch} onClick={handleClick} >
        <div id="color" style={{background: props.color}}  className={styles.color} />
      </div>
      {displayColorPicker ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <SketchPicker
            color={ props.color }
            onChange={handleChangeColor}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
