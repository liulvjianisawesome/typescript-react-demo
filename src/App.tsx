import * as React from 'react';
import './App.css';
import AppRouter from './router';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;