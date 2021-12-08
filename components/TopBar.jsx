import React from 'react'
import { Image } from 'react-native-elements/dist/image/Image';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { StyleSheet, Text, View } from 'react-native';
import '../assets/logo.png'
import { TouchableOpacity } from 'react-native'

const TopBar = ({ navigation }) => {

    return(
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
    text : {
        color: 'blue'
    }

  });

export default TopBar