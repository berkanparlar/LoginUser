import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SingUpScreen from '../screens/SingUp'
import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'



const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator >
            <Stack.Screen
            name="Login"
            component={LoginScreen}
           />
            <Stack.Screen
            name="SingUp"
            component={SingUpScreen}
            />
            <Stack.Screen
            name="Home"
            component={HomeScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root