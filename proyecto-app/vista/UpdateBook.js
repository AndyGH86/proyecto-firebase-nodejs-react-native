import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

const UpdateBook = (props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { title, author, genre } = props.editableBook;
    console.log(props.editableBook.id);
    setTitle(title);
    setAuthor(author);
    setGenre(genre);
  }, [])
  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/books/${props.editableBook.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, author, genre })
      });
      if (response.ok) {
        props.setReload(new Date());
        props.navigation.navigate('BooksList');
      } else {
        console.error("Failed to update book");
        Alert.alert("Error", "Failed to update book");
      }
    } catch (error) {
      console.error("Error updating book:", error);
      Alert.alert("Error", "Failed to update book");
    }
   finally {
    
    setLoading(false);
}
  };

  const handleDelete = async () => {

    try {
      const response = await fetch(`http://127.0.0.1:3000/books/${props.editableBook.id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        props.setReload(new Date());
        props.navigation.navigate('BooksList');
      } else {
        console.error("Failed to delete book");
        Alert.alert("Error", "Failed to delete book");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
      Alert.alert("Error", "Failed to delete book");
    }
  };

  return (
    <View style={styles.container }>
      Title:
      <TextInput
        style={styles.input}             
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      Author:
      <TextInput
        style={styles.input}        
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
      />
      Genre:
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={genre}
        onChangeText={setGenre}
      />
      <View style={styles.button}>
        <Button color="#006400" title="Update" onPress={handleUpdate} disabled={loading}/>
     
        <Button color="#ff0000" title="Delete" onPress={handleDelete} />
      </View>
    </View>


  )


};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    fontSize: 20,
    margin: 5,
    
    
    
    
  },
  button: {
    flexDirection:"row",
    justifyContent:"space-evenly",
    margin: 20,
  },
 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
  },
});
export default UpdateBook;