import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Image } from 'react-native-elements/dist/image/Image';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { TouchableOpacity } from 'react-native'
import { collection, getDocs } from 'firebase/firestore/lite';
import { auth, db } from '../firebase';
import { getAuth, signOut } from 'firebase/auth';



const UserScreen = ({route, navigation}) => {
    // const email = navigation.getParam('email', '');
    // const password = navigation.getParam('password', '');
    const {signedIn, setSignedIn} = route.params;
    // const getBook = (key) => {
    //     fetch("https://openlibrary.org/"+key)
    //     .then(response => response.json())
    //     .then(data => )
    // }

    const auth = getAuth();
    const user = auth.currentUser;
    const email = user.email;

    const logout = () => {
        signOut(auth)
        .then(setSignedIn(false))
        .then(navigation.navigate("LoginScreen", {signedIn: signedIn}))
    }

    return(
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.push("HomeScreen")}>
                    <Image source={require('../assets/logo.png')} style={{ width:120, height:70}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.button, { marginLeft: 135, padding: 15}]}>
                    <Text style={styles.text}>
                        Go Back 
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:3, backgroundColor: "#DB5461", margin: 30, borderRadius: 15}}>
                <View style={styles.imageContainer}>
                <Avatar 
                    rounded 
                    size="large"  
                    icon={{name: 'user', type: 'font-awesome'}} 
                    activeOpacity={0.7}
                    overlayContainerStyle={{backgroundColor: "#f4c384"}}
                    />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>
                        Edit Profile
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => logout()}>
                    <Text style={styles.text}>
                        Logout
                    </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.h3}>Email</Text>
                    <Text style={styles.h1}>{email}</Text>
                    <Text style={styles.h1}>Books Saved:</Text>
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
    imageContainer: {
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        alignSelf: "center", 
        margin: 20
    },
    button: {
        backgroundColor: "#F4C384",
        borderRadius: 15, 
        padding: 20,
        margin: 10,
        alignItems: "center", 
    }, 
    textContainer: {
        alignItems: "flex-start", 
        alignSelf: "center", 
        width: "80%"
    },
    text: {
        color: "#FFFCF2", 
    }, 
    h1 : {
        color: "#FFFCF2",
        fontSize: 30, 
        marginTop: 10
    },
    h3 : {
        color: "#FFFCF2",
        fontSize: 20
    }, 
    mainContainer: {
        flexDirection: 'column', 
        flex:1, 
        height:"100%", 
        width: "100%", 
        backgroundColor:"#E98A15"
    }
});

export default UserScreen