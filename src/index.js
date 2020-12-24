import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Firebase, { FirebaseContext } from './services/firebase';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <FirebaseContext.Provider value={new Firebase()}>
        <StrictMode>
          <App />
        </StrictMode>
      </FirebaseContext.Provider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
