import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LoginScreen from './screens/Login'
import NavigationScreens from './Navigation';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ header: () => null }} />
        <Stack.Screen
          name="Navigation"
          component={NavigationScreens}
          options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
