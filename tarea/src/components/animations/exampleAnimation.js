// Fuente: https://codepen.io/zerospree/pen/XWaGER

import styles from "./exampleAnimation.module.css";

const Animation = () => {
  return (
    <div style={{ transform: "scale(5)"}}>
      <spam className={styles.load}>
        <div />
        <div />
        <div />
        <div />
      </spam>
    </div>
  );
};

export default Animation;
