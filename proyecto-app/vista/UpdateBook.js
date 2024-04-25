import React from "react";
import { Text, View, ScrollView, TextInput, Button, StyleSheet } from "react-native";

const UpdateBook = (props) => {

    const handleChangeText = (name, value) => {
        setNewBook({ ...newBook, [name]: value})
    }
    const saveChangeBook = () => {

    }
    const deleteBook = () => {
        
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
            <Button color="#19AC52" title="Save Book" onPress={() => alert('works')} />
        </View>
        <View>
            <Button color="#E37399" title="Delete Book" onPress={() => alert('works')} />
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
  

export default UpdateBook