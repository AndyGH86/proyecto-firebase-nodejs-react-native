import React, { useState } from "react";
import { Text, View, TextInput, ScrollView, StyleSheet, Button } from "react-native";

const CreateBook = () => {
    const [newBook, setNewBook] = useState({
        name: '',
        author: '',
        category: '',
        year: '',
    })

    const handleChangeText = (name, value) => {
        setNewBook({ ...newBook, [name]: value})
    }

    const SaveNewBook = async () => {
        try {
            const response = await fetch('API_ENDPOINT/books', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ title: newBookTitle }),
            });
            const data = await response.json();
            newBook([...books, data]);
            setNewBook('');
          } catch (error) {
            console.error('Error adding book:', error);
          }
            }

    return(
        <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Book Name"  
            onChangeText={(value) =>  handleChangeText('name', value)}/>
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Author"
            onChangeText={(value) =>  handleChangeText('author', value)} />
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Category" 
            onChangeText={(value) =>  handleChangeText('category', value)}/>
        </View>
        <View style={styles.inputGroup}>
            <TextInput 
            placeholder="Year" 
            onChangeText={(value) =>  handleChangeText('year', value)}/>
        </View>
        <View>
            <Button title="Save Book" onPress={() => SaveNewBook()} />
        </View>
        </ScrollView>

    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc'
    },
  });
  

export default CreateBook