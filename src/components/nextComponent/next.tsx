import * as React from 'react';
import styles from './next.scss';

export interface Props {
  color?: string;
  toggleColor?: () => void;
}

const ToggleColor = ({color, toggleColor}: Props) => {
  return (
    <div className={(color) + ' ' + styles.overAllContainer}>
        <button className={styles.button} onClick={toggleColor}>Toggle colors</button>
    </div>
  );
}

export default ToggleColor;