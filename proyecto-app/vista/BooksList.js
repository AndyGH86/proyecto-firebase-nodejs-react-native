import React, { useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

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
    }, [props.reload]);

    const renderItem = ({ item }) => (
        <ListItem bottomDivider onPress={() => props.navigation.navigate('UpdateBook')}>
            <ListItem.Chevron />
            <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.author}</ListItem.Subtitle>
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
            <Button title="Create Book" onPress={() => props.navigation.navigate('CreateBook')} />
        </>
    );
}

export default BooksList;
