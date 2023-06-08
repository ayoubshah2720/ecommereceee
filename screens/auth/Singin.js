import React, { useState } from "react";
import { TextInput, SafeAreaView, StyleSheet, Text, TouchableHighlight, View, Button } from "react-native";

export default function Signin({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSingin = () => {
        console.log(email);
        navigation.replace("Home")
    }
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={styles.emailInput}
                placeholder="Enter your email"
            />

            <TextInput
                onChangeText={(password) => setPassword(password)}
                value={password}
                style={styles.passwordInput}
                placeholder="Create Password"
            />

            <TouchableHighlight style={styles.button}>
                <Button onPress={handleSingin} title="Signin" style={styles.buttonText}></Button>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=> navigation.navigate('Signup')} style={styles.button}>
                <View style={styles.noAccount}>
                <Text style={styles.buttonText}>Don't have account?</Text>
                <Text style={styles.buttonText}>Signup</Text>
                </View>
            </TouchableHighlight>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emailInput: {
        width: 250,
        height: 50,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        padding: 10,
        backgroundColor:'#fff',
        marginBottom:10,
    },
    passwordInput:{
        width: 250,
        height: 50,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'black',
        padding: 10,
        backgroundColor:'#fff'
    },
    button: {
        // backgroundColor: 'lightgreen',
        borderRadius: 15,
        // marginTop: 25,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white'
    },
    noAccount:{

    }
});