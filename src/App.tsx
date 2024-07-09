import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [isGreenOn, setIsGreenOn] = useState(false);
  const [isYellowOn, setIsYellowOn] = useState(false);
  const [isRedOn, setIsRedOn] = useState(false);

  useEffect(() => {
    turnGreenOn();
  }, []);

  function turnGreenOn() {
    setIsGreenOn(true);
    setTimeout(() => {
      setIsGreenOn(false);
      turnYellowOn();
    }, 3000);
  }

  function turnYellowOn() {
    setIsYellowOn(true);
    setTimeout(() => {
      setIsYellowOn(false);
      turnRedOn();
    }, 500);
  }

  function turnRedOn() {
    setIsRedOn(true);
    setTimeout(() => {
      setIsRedOn(false);
      turnGreenOn();
    }, 4000);
  }
  return (
    <div className={styles.lightBox}>
      <div className={isGreenOn ? `${styles.light} ${styles.green}` : styles.light}></div>
      <div className={isYellowOn ? `${styles.light} ${styles.yellow}` : styles.light}></div>
      <div className={isRedOn ? `${styles.light} ${styles.red}` : styles.light}></div>
    </div>
  );
}

export default App;
