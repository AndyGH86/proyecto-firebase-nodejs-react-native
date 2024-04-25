import React, { useEffect, useState } from "react";
import { Text, ScrollView, Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";



const BooksList = (props) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        

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