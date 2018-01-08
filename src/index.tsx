import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { enthusiasm } from './reducers/test';
import { StoreState } from './types/test';
import Test from './containers/Test';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NextStoreState } from './types/next';
import { colorMode } from './reducers/next';
import Next from './containers/next';
import styles from './index.scss';
import colorStyles from './components/nextComponent/next.scss';


const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'Typescript',
});

const nextStore = createStore<NextStoreState>(colorMode, {
  color: colorStyles.green,
});

ReactDOM.render(
  <div className={styles.container}>
    <Provider store={store}>
      <Test />
    </Provider>
    <Provider store={nextStore}>
      <Next />
    </Provider>
  </div>,
  document.getElementById('root')
);

