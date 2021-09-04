import React, { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, Button, FlatList, TextInput, TouchableOpacity , View} from "react-native";
import { Card, ListItem, Icon } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";


import ApiCall from "../api/NewsApi";

   


const MainScreen = () => {

    const [fetchData, setFetchData] = useState();
    const [errorMessage, setErrorMessage] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");

         const fetchedData = async () => {
        
             const response = await ApiCall.get("/", {
                 params: {
                     q: {text}
               }
             });
           
            setLink(response.data.articles[0].link)
             setFetchData(response.data.articles);
             setText("");
          //  await console.log();
           
           
         };
    
  const handleOpenWithWebBrowser = () => {
       console.log(link)
       WebBrowser.openBrowserAsync(link);
      
    };


    return (
      <View style={styles.body}>
      <ScrollView style={styles.main}>
        <TextInput
          style={{ height: 50 , margin: 10, backgroundColor: "white", borderRadius: 10, padding: 10}}
          placeholder="Whats your poison today?"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <View style={styles.buttonMain}>
        <Button onPress={fetchedData} title="Inject It Into My Veins" 
 />
        </View>
        <FlatList
          data={fetchData}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Card  style={{borderRadius: 10}}>
              <TouchableOpacity
                onPress={handleOpenWithWebBrowser}
              ><Card.Title>{item.title}</Card.Title>
              </TouchableOpacity>
              
              {/* <Card.Divider />
              <Card.Title>{item.source.title}</Card.Title> */}
            </Card>
          )}
        />
      </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
      body : {
        backgroundColor: "#000000",
        height:"100%"

      },
      main: {
        marginTop: "50%",
    },
      buttonMain: {
        height: 60,
        width: "100%",
        color: "#000000"
        
     },


});


export default MainScreen;