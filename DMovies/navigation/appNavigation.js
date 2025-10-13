import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigation } from 'react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import { StackScreen } from 'react-native-screens';

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <StackActions.Navigator>
            <StackScreen
                name = "Home"
                options={{ headerShown: false }}
                component={{HomeScreen}}
            />
        </StackActions.Navigator>
    </NavigationContainer>
  )
}