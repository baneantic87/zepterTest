import * as React from 'react';
import TabNavigator from './Navigators/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenNameConstants } from './helpers/ScreenNameConstants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name={ScreenNameConstants.TAB_SCREEN} component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;