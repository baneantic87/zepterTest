import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen'
import PortfolioScreen from './Screens/PortfolioScreen'
import FavoritesSreen from './Screens/FavoritesSreen'
import { ScreenNameConstants } from '../helpers/ScreenNameConstants';




const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={ScreenNameConstants.HOME_SCREEN} component={HomeScreen} />
        <Tab.Screen name={ScreenNameConstants.PORTFOLIO_SCREEN} component={PortfolioScreen} />
        <Tab.Screen name={ScreenNameConstants.FAVORITES_SCREEN} component={FavoritesSreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;