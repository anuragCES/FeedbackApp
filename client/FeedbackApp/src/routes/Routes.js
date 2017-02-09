import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {LoginView} from '../views/login';

export default () => (
  <Router>
    <Scene key='root' hideNavBar>
      <Scene key='login' component={LoginView} title='Login' />
    </Scene>
  </Router>
)
