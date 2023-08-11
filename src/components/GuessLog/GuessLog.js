import React from "react";
import styles from "./GuessLog.module.css";
import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

const GuessLog = ({ guesses, answer }) => {
  return (
    <ul className={styles.list}>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess key={num} value={guesses[num]} answer={answer} />;
      })}
    </ul>
  );
};

export default GuessLog;
