import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList142950Navigator from '../features/NotificationList142950/navigator';
import Settings142949Navigator from '../features/Settings142949/navigator';
import Settings142941Navigator from '../features/Settings142941/navigator';
import UserProfile142939Navigator from '../features/UserProfile142939/navigator';
import Settings142903Navigator from '../features/Settings142903/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList142950: { screen: NotificationList142950Navigator },
Settings142949: { screen: Settings142949Navigator },
Settings142941: { screen: Settings142941Navigator },
UserProfile142939: { screen: UserProfile142939Navigator },
Settings142903: { screen: Settings142903Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
