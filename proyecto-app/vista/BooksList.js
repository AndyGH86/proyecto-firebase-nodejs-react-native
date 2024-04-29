import React, {useEffect, useState} from "react";
import {ActivityIndicator, Button, FlatList, View, StyleSheet} from "react-native";
import {ListItem} from "react-native-elements";

const BooksList = (props) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBooks = async () => {
        try {
            setLoading(true)
            const response = await fetch(`http://127.0.0.1:3000/books`);
            const data = await response.json();
            setBooks(data.books);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching books:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBooks();
        setLoading(true);
    }, [props.reload]);

    const editBook = (book) => {
        props.setEditableBook(book);
        props.navigation.navigate('UpdateBook')
    };

    const renderItem = ({ item }) => (
        <ListItem style={styles.container} bottomDivider onPress={() => editBook(item)}>
            <ListItem.Chevron />
            <ListItem.Content>
                <ListItem.Title>Title: {item.title}</ListItem.Title>
                <ListItem.Title>Author: {item.author}</ListItem.Title>
                <ListItem.Subtitle>Genre: {item.genre}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <>
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <Button style={styles.butto} color="#841584" title="Create Book" onPress={() => props.navigation.navigate('CreateBook')} />
        </>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#87cefa",
      justifyContent: 'center',
    },
    butto:{
        width: 20,
        justifyContent: "center"
    }
  });

export default BooksList;