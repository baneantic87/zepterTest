import React from 'react';
import HomeScreen from '../Screens/HomeScreen'
import PortfolioScreen from '../Screens/PortfolioScreen'
import FavoritesScreen from '../Screens/FavoritesScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenNameConstants } from '../helpers/ScreenNameConstants';
import { Image, Text } from 'react-native'
import { ColorConstants } from '../helpers/ColorConstants';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: ColorConstants.black,
      }
    }}>
        <Tab.Screen name={ScreenNameConstants.HOME_SCREEN} component={HomeScreen} 
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused, color, size }) => (
              focused ? <Image style={iconStyle} source={require('../../assets/icons/homeActive.png')} /> : <Image style={iconStyle}  source={require('../../assets/icons/homeInactive.png')} />
            ),
            tabBarActiveTintColor: "white"
          }} />
        <Tab.Screen name={ScreenNameConstants.PORTFOLIO_SCREEN} component={PortfolioScreen}
             options={{
              tabBarLabel: "Portfolio",
              tabBarIcon: ({ focused, color, size }) => (
                focused ? <Image style={iconStyle} source={require('../../assets/icons/portfolioActive.png')} /> : <Image style={iconStyle}  source={require('../../assets/icons/portfolioInactive.png')} />
              ),
              tabBarActiveTintColor: "white"
            }} /
            >
        <Tab.Screen name={ScreenNameConstants.FAVORITES_SCREEN} component={FavoritesScreen}
             options={{
              tabBarLabel: "Favorites",
              tabBarIcon: ({ focused, color, size }) => (
                focused ? <Image style={iconStyle} source={require('../../assets/icons/favoritesActive.png')} /> : <Image style={iconStyle}  source={require('../../assets/icons/favoritesInactive.png')} />
              ),
              tabBarActiveTintColor: "white"
            }}
        />
      </Tab.Navigator>
  );
}

const iconStyle = {width: 32, height: 32}

export default TabNavigation;