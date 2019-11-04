import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Firebase, { FirebaseContext } from './services/firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <FirebaseContext.Provider value={new Firebase()}>
        <Router>
          <App />
        </Router>
      </FirebaseContext.Provider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
