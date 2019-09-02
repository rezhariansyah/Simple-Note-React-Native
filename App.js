import React, {Component} from 'react';
import MainNavigator from './src/configs/routes/MainNavigator';
import store from './src/redux/Store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
