import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Image } from 'react-native-elements/dist/image/Image';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { TouchableOpacity } from 'react-native'

const HomeScreen = (props) => {
    const [userQuery, setUserQuery] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        fetch("https://openlibrary.org/subjects/history.json")  //gets books about history subject from api
        .then(response => response.json())
        .then(data => setBooks(data.works)) //sets books' data
        .catch((error) => {
            Alert.error('Error', error)
        })
    }, [])
    
    const getBooks = () => {
        fetch("https://openlibrary.org/search.json?q="+userQuery)
        .then(response => response.json())
        .then(data => setBooks(data))
        .catch((error) => {
            Alert.error('Error', error)
        })
    }

    // const getBook = (key) => {
    //     fetch("https://openlibrary.org/"+key)
    //     .then(response => response.json())
    //     .then(data => )
    // }

    const navigation = props.navigation;

    return(
        <View style={{flexDirection: 'column', flex:1, height:"100%", width: "100%", backgroundColor:"purple"}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.push("HomeScreen")}>
                    <Image source={require('../assets/logo.png')} style={{ width:120, height:70}}/>
                </TouchableOpacity>
                <Avatar 
                    rounded 
                    size="medium"  
                    icon={{name: 'user', type: 'font-awesome'}} 
                    activeOpacity={0.7}
                    overlayContainerStyle={{backgroundColor: "#f4c384"}}
                    style={{height: 50, width: 50, marginLeft: 150}}
                    onPress={() => alert("Hi")}
                    />
            </View>
            <View style={{flex:3}}>
                <View >
                    <Text style={{backgroundColor: "#E98A15", color: "#FFFCF2", margin: 10, fontSize:18}}>Recommended for you</Text>
                </View>
                <FlatList
                data={books}
                numColumns="2"
                renderItem={({item}) => <View style={styles.bookContainer}><Button onPress={() => navigation.navigate('BookScreen', {bookId: item.key})} title={item.title} style={styles.text} /></View>}
                />

            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#E98A15',
        alignItems: "center",
        padding: 30,
        paddingTop: 50,
        flexDirection: "row", 
        height: "13%", 
        width:"100%",
    },
    bookContainer: {
        backgroundColor: "#DB5461",
        borderRadius: 15, 
        padding: 20,
        margin: 10,
        width: "42%",
    }, 
    text: {
        color: "#FFFCF2", 
    }
});

export default HomeScreen