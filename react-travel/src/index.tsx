<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'antd/dist/antd.css'
import './i18n/configs'
import { Provider } from 'react-redux'
import rootStore from './redux/store'
import axios from 'axios'
import { PersistGate } from 'redux-persist/integration/react'

axios.defaults.headers['x-icode'] = 'A977754DC15F3D9F'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={rootStore.store}>
			<PersistGate persistor={rootStore.persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import "./i18n/configs";
import { Provider } from "react-redux";
import rootStore from "./redux/store";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";

axios.defaults.headers["x-icode"] = "A977754DC15F3D9F";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootStore.store}>
      <PersistGate persistor={rootStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
>>>>>>> 0185803b3109c0c839bfdeecb21dcc88507afbd1
