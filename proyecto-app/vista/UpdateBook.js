import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

const UpdateBook = (props) => {
    console.log(props.route.params.id)

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TextInput
                style={{ height: 40, width: 300, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
                placeholder="Title"
                
               
            />
         </View>    
           
        

    )
        
    
};

export default UpdateBook;
