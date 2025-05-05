import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './Home';
import Detail from './Detail';
import Profile from './Profile';

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Overview'}}
      />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default RootStack;
