import React from "react";
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Platform, Dimensions } from "react-native";
import MenuDrawer from "../../components/MenuDrawer";
import Home from '../../screens/Home';
import AddNote from '../../screens/AddNote';
import EditNote from '../../screens/EditNote';

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWitdh: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  }
};

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    AddNote: {
      screen: AddNote,
    },
    EditNote: {
      screen: EditNote,
    },
  },
  {
    headerMode : 'none',
    initialRouteName: 'Home'
  }
);

const DrawerNavigator = createDrawerNavigator(
    {
      Home: AppStackNavigator,
    },
    DrawerConfig
  );
  
  export default createAppContainer(DrawerNavigator);