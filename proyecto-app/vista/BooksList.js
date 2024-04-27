import React, { useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import UpdateBook from "./UpdateBook";

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

    const renderItem = ({ item }) => (
        <UpdateBook
            book={item}
            onUpdate={(id, newData) => handleUpdateBook(id, newData)}
            onDelete={(id) => handleDeleteBook(id)}
        />
    );

    const handleUpdateBook = async (id, newData) => {
        try {
            const response = await fetch(`http://127.0.0.1:3000/books/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            });
            if (response.ok) {
                fetchBooks();
            } else {
                console.error("Failed to update book");
            }
        } catch (error) {
            console.error("Error updating book:", error);
        }
    };

    const handleDeleteBook = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:3000/books/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                fetchBooks();
            } else {
                console.error("Failed to delete book");
            }
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };

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
