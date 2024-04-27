import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const UpdateBook = ({ book, onUpdate, onDelete }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [genre, setGenre] = useState(book.genre);

  const handleUpdate = () => {
    onUpdate(book.id, { title, author, genre });
  };

  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <View style={{ margin: 20 }}>
      <Text>Title:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'transparent', borderWidth: 1, marginBottom: 10, outline: 'none' }}
        onChangeText={setTitle}
        value={title}
      />
      <Text>Author:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'transparent', borderWidth: 1, marginBottom: 10, outline: 'none' }}
        onChangeText={setAuthor}
        value={author}
      />
      <Text>Genre:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'transparent', borderWidth: 1, marginBottom: 10, outline: 'none' }}
        onChangeText={setGenre}
        value={genre}
      />
      <Button  title="Update" color='#228b22' onPress={handleUpdate} />
      <Button style={{ padding: 5, }}title="Delete" color='#ff0000' onPress={handleDelete} />
    </View>
  );
};

export default UpdateBook;
