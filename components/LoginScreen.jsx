import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

const LoginScreen = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signedIn, setSignedIn] = useState(false)
    const navigation = props.navigation;

    useEffect(() => {
    //   const unsubscribe = onAuthStateChanged(auth, user => {
    //     if (user) {
    //       navigation.replace("HomeScreen")
    //     }
    // })
        if(signedIn===true){
            navigation.navigate("HomeScreen", {setSignedIn: setSignedIn, signedIn: signedIn})
        }
    })

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
               const user = userCredentials.user;
                setSignedIn(true)
            })
            .catch(error => alert(error.message))
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
               const user = userCredentials.user;
                setSignedIn(true)
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    onChangeText={input => setEmail(input)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={input => setPassword(input)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSignIn}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleSignUp}>
                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        alignSelf:"center", 
        justifyContent: "center",
        flex: 1,
        backgroundColor: "black", 
        width:"100%"
    },
    inputContainer: {
        width: '70%', 
        alignSelf: 'center'
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: "#DB5461",
        width: '70%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
      },
    text: {
        color: "#FFFCF2", 
    }
})
