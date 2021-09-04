import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DataAsm } from './components/DataAsm';
import { Provider } from "react-redux";
import store from './redux/store';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <DataAsm>
        <Provider store={store}>
          <BrowserRouter  basename={process.env.PUBLIC_URL}>
            <App />
          </BrowserRouter>
        </Provider>
      </DataAsm>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
