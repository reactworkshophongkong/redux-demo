import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import AppRTK from './AppRTK'
import AppAsyncExample from './async-example/App'

import { store } from './redux/store'
import { store as storeWithRTK } from './redux-using-rtk/store'

// note AppRTK and AppAsyncExample need RTK, and should use storeWithRTK

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeWithRTK}>
      <AppRTK />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
