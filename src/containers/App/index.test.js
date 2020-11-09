import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '.';

const ConnectedApp = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

test('renders without crashing', () => {
  const { unmount } = render(ConnectedApp);
  unmount();
});
