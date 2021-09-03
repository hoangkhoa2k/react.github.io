import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DataAsm } from './components/DataAsm';
import { Provider } from "react-redux";
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
      <DataAsm>
      <Provider store={store}>
        <App />
      </Provider>
      </DataAsm>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
