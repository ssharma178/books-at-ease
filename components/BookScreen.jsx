import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { TouchableOpacity } from 'react-native'
import '../assets/logo.png'
import { Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const BookScreen = ( {route, navigation} ) => {
    const {bookId} = route.params;
    const {signedIn} = route.params;
    const {setSignedIn} = route.params;
    const {bookLink} = route.params;
    const [book, setBook] = useState({bookPub: "", authors: [], bookCover: 0, bookName: ""})
    const [authorName, setAuthorName] = useState("")

    useEffect(()=> {
        fetch("https://openlibrary.org/"+bookId+".json")  //gets book from home screen
        .then(response => response.json())
        .then(data => setBook({bookPub: data.first_publish_date, authors:data.authors[0].author, bookCover:data.covers[1], bookName: data.title})) //sets books' data
        .catch((error) => {
            Alert.error('Error', error)
        });
    }, []);
    
    //gets author's name
    const getAuthor = (key) => {
        fetch("https://openlibrary.org"+key+".json")
        .then(response => response.json())
        .then(data => setAuthorName(data.name))
    }
    
    //only gets author's name if the key is not undefined. 
    //It is important as the API gives a lot of errors and the app crashes otherwise.
    if (book.authors.key !== undefined) {
        getAuthor(book.authors.key)
    } 
    
    return(
        <View style={{backgroundColor: "#E98A15", flex: 1}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                    <Image source={require('../assets/logo.png')} style={{ width:120, height:70}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.button, {marginLeft: 20 }]}>
                    <Text style={styles.text}>
                        Go Back 
                    </Text>
                </TouchableOpacity>
                <Avatar 
                    rounded 
                    size="medium"  
                    icon={{name: 'user', type: 'font-awesome'}} 
                    activeOpacity={0.7}
                    overlayContainerStyle={{backgroundColor: "#f4c384"}}
                    style={{height: 50, width: 50, marginLeft: 30}}
                    onPress={() => navigation.push("UserScreen", {signedIn: signedIn, setSignedIn: setSignedIn})}
                    />
            </View>
            <View style={styles.bookContainer}>
                {book.bookName !== undefined && 
                    <Text style={styles.h3}>
                        {book.bookName}
                    </Text>
                }

                <Image source={{uri:'https://covers.openlibrary.org/b/id/'+book.bookCover+'.jpg'}} style={{width: 300, height: 400, alignSelf: "center", borderRadius: 15}}/>

                {/* Displays text only if publishing date is available  */}
                <View style={styles.textContainer} >
                    {book.bookPub !== undefined && 
                        <Text style={styles.h3}>
                            Published on: {book.bookPub}
                        </Text> 
                    } 

                    {authorName !== undefined && 
                        <Text style={styles.h3}>
                            Author: {authorName}
                        </Text>
                    }

                    {bookLink !== undefined &&
                        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL("https://openlibrary.org/borrow/ia/"+bookLink)} >
                            <Text style={styles.h3}>
                                Read
                            </Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#E98A15',
        alignSelf: "center",
        alignItems: "center",
        padding: 10,
        paddingTop: 50,
        flexDirection: "row", 
        height: "20%", 
        width:"90%",
    },
    bookContainer: {
        backgroundColor: "#DB5461",
        borderRadius: 15, 
        padding: 30,
        margin: 20,
        marginTop: 0,
        width: "90%",
        alignSelf: "center",
        maxHeight: "80%"
    }, 
    button: {
        backgroundColor: "#F4C384",
        borderRadius: 15, 
        padding: 20,
        margin: 10,
        alignItems: "center", 
    },
    h3 : {
        color: "#FFFCF2",
        fontSize: 20, 
        margin: 5
    }, 
    textContainer: {
        marginTop: 5
    }, 
    text: {
        color: "#DB5461",
        fontWeight: "bold"
    }
});

export default BookScreen