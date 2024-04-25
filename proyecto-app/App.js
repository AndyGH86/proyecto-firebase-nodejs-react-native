import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BooksList from './vista/BooksList';
import UpdateBook from './vista/UpdateBook';
import CreateBook from './vista/CreateBook';

const Stack = createNativeStackNavigator();


function MyStack() {
  return(
  <Stack.Navigator>
    <Stack.Screen name='BooksList' component={BooksList} options={{ title:"Your Books"}}/>
    <Stack.Screen name='CreateBook' component={CreateBook} options={{ title:"Create Your Book"}}/>
    <Stack.Screen name='UpdateBook' component={UpdateBook} options={{ title:"Edit Your Book"}}/>
  </Stack.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>

      <MyStack />

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
