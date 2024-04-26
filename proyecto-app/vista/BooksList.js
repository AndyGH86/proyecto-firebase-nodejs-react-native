import React, { useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

const BooksList = (props) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBooks = async () => {
        try {
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://and-test.onrender.com/books')}`);
            const data = await response.json();
            setBooks(JSON.parse(data.contents).books);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching books:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

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
