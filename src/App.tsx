import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { LIGHT_CONFIG } from "./commom/lightConfig";
import { LightColor } from "./commom/common.type";

function App() {
  const [currentLight, setCurrentLight] = useState<LightColor>("green");

  useEffect(() => {
    const { duration, next } = LIGHT_CONFIG[currentLight];
    const timerId = setTimeout(() => {
      setCurrentLight(next);
    }, duration);

    return () => clearTimeout(timerId);
  }, [currentLight]);

  return (
    <div className={styles.lightBox}>
      {Object.keys(LIGHT_CONFIG).map((key) => (
        <div
          key={key}
          className={styles.light}
          style={{ backgroundColor: key === currentLight ? key : undefined }}
        ></div>
      ))}
    </div>
  );
}

export default App;
