import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

import CupButton from './components/CupButton';
import HomeScreen from './screens/Home';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: Ionicons,
    name: 'search',
    style: { width: 50, height: 50, marginTop: 30, marginLeft: 30 }
  },
  Settings: {
    lib: Ionicons,
    name: 'chatbox-ellipses',
    style: { width: 50, height: 50, marginTop: 30, marginRight: 30 }
  },
};

export default function Navigation() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#221741" />
        <Tab.Navigator
          initialRouteName="HomeScreen"
          screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, size, focused }) => {
              if (route.name === 'Pay') {
                return (
                  <CupButton
                    onPress={() => navigation.navigate('Pay')}
                    focused={focused}
                  />
                );
              }

              const { lib: Icon, name, style } = icons[route.name];
              return <Icon name={name} size={size+20} color={color} style={style} />;
            },
          })}
          tabBarOptions={{
            style: {
              backgroundColor: '#392671',
              borderTopColor: '#392671',
            },
            activeTintColor: '#EBEBED',
            inactiveTintColor: '#FFB023',
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: ''
            }}
          />
          <Tab.Screen
            name="Pay"
            component={HomeScreen}
            options={{
              title: '',
            }}
          />

          <Tab.Screen
            name="Settings"
            component={HomeScreen}
            options={{
              title: '',
            }}
          />
        </Tab.Navigator>
    </>
  );
}