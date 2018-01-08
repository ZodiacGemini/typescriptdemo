import { ToggleColorAction } from '../actions/next';
import { NextStoreState } from '../types/next';
import { TOGGLE_COLOR } from '../constants/next';
import styles from '../components/nextComponent/next.scss'

export function colorMode(state: NextStoreState, action: ToggleColorAction): NextStoreState {
  switch (action.type) {
    case TOGGLE_COLOR:
      return {color: state.color == styles.blue ? styles.green : styles.blue };
  }
  return state;
}