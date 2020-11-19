import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import App from '.';

const ConnectedApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

test('renders without crashing', () => {
  const { unmount } = render(ConnectedApp);
  unmount();
});
