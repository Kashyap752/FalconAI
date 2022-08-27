import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigators/app-navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import configureStore from './app/redux/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};


export default App;
