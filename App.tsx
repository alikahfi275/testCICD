import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/RootStack';
import {AppProvider} from './src/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
