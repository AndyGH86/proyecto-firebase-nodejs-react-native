import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

const CreateBook = ({ navigation, route, setReload }) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCreateBook = async () => {
        if (!title || !author) {
            Alert.alert("Error", "Please enter title and author.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`http://127.0.0.1:3000/books`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, author, genre }),
            });

            if (!response.ok) {
                throw new Error("Failed to create book.");
            }

            Alert.alert("Success", "Book created successfully.");
            navigation.goBack(); // Go back to previous screen
            route.params.refresh(); // Refresh the book list
        } catch (error) {
            console.error("Error creating book:", error);
            Alert.alert("Error", "Failed to create book. Please try again.");
        } finally {
            setReload(new Date());
            setLoading(false);
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
            <Button title="Create Book" onPress={handleCreateBook} disabled={loading} />
        </View>
    );
};

export default CreateBook;
