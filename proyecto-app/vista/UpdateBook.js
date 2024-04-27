import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
        placeholder="Genre"
        value={genre}
        onChangeText={setGenre}
      />
      <View>
        <Button title="Update" onPress={handleUpdate} disabled={loading}/>
      </View>
      <View>
        <Button title="Delete" onPress={handleDelete} />
      </View>
    </View>



  )


};

export default UpdateBook;