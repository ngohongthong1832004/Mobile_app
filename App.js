import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/home';
import FormScreen from './components/form';
import AboutScreen from './components/about';
import MyTabs from './components/tabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="MyTabs" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Tabs" component={MyTabs} />
          <Stack.Screen name="Home" component={HomeScreen}  />
          <Stack.Screen name="Form" component={FormScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

