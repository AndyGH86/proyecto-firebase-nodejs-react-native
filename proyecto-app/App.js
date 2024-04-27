import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BooksList from './vista/BooksList';
import UpdateBook from './vista/UpdateBook';
import CreateBook from './vista/CreateBook';
import { useState } from 'react';

const Stack = createNativeStackNavigator();


function MyStack() {
  const [reload, setReload] = useState();
  const [editableBook, setEditableBook] = useState();
  return(
    <Stack.Navigator style={styles.container}>
    <Stack.Screen  name='BooksList' options={{ title:"Your Books"}}>
      {(props) => <BooksList  {...props} reload={reload} setReload={setReload} setEditableBook={setEditableBook}/>}
    </Stack.Screen>
    <Stack.Screen name='CreateBook' options={{ title:"Create Your Book"}}>
      {(props) => <CreateBook  {...props} reload={reload} setReload={setReload}/>}
    </Stack.Screen>
    <Stack.Screen name='UpdateBook' options={{ title:"Edit Your Book"}}>
      {(props) => <UpdateBook  {...props} reload={reload} setReload={setReload} editableBook={editableBook} setEditableBook={setEditableBook}/>}
    </Stack.Screen>
  </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer  >

      <MyStack style={styles.container }/>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87cefa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});