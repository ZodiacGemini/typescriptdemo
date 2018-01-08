import * as React from 'react';
import styles from './Test.scss';
import GetQuestionMarks from './GetQuestionMarks';

export interface Props {
  name?: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Hello = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
      <div className={styles.bigBlueBox}>
        <div className={styles.colorRed}>
          <p className={styles.colorRed}>Hello {name + ' ' + GetQuestionMarks(enthusiasmLevel)}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.plus} onClick={onIncrement}>+</button>
          <button className={styles.plus} onClick={onDecrement}>-</button>
        </div>
      </div>
  );
}

export default Hello;