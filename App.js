// import { StyleSheet, Text, View } from 'react-native';
// import NavigationContainer from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import OnlinePayment from './OnlinePayment';
import OrderDelivery from './OrderDelivery';

export default function App() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="OnlinePayment" component={OnlinePayment} />
        <stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#fff',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// });
