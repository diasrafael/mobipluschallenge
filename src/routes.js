import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/Home';
import Twitter from './pages/Twitter';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Twitter,
  }),
);

export default Routes;
