import React, { useEffect, useState } from "react";
import { Text, ScrollView, Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";



const BooksList = (props) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = () => {
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://and-test.onrender.com/books')}`)
      .then(response => {
          return response.json()
      })
      .then(data => setBooks(JSON.parse(data.contents).books));
    }

    useEffect(() => {
        fetchBooks();
    },[])


    return(<>
        <ListItem bottomDivider onPress={() => {
            props.navigation.navigate('UpdateBook')
        }}>
            <ListItem.Chevron />
            <ListItem.Content>
                <ListItem.Title>Harry Potter</ListItem.Title>
                <ListItem.Subtitle>J.R Rowling</ListItem.Subtitle>

            </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => {
            props.navigation.navigate('UpdateBook')
        }}>
            <ListItem.Chevron />
            <ListItem.Content>
                <ListItem.Title>Harry Potter</ListItem.Title>
                <ListItem.Subtitle>J.R Rowling</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => {
            props.navigation.navigate('UpdateBook')
        }}>
            <ListItem.Chevron />
            <ListItem.Content>
                <ListItem.Title>Harry Potter</ListItem.Title>
                <ListItem.Subtitle>J.R Rowling</ListItem.Subtitle>
            </ListItem.Content>
            </ListItem>






        <ScrollView>
            <Button title= "Create Book"  onPress={() => props.navigation.navigate('CreateBook')}/>
        </ScrollView>

        </> )


}

export default BooksList