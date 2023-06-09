import React, { useState } from "react";
import { TextInput, SafeAreaView, StyleSheet, Text, Button, TouchableHighlight } from "react-native";
import auth from '@react-native-firebase/auth';

export default function Signup({navigation}) {
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async () => {
        const isAuth = await auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
        const isUserCreated = res
          console.log('User account created & signed in!');
          console.log('isUserCreated',isUserCreated);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
        navigation.push("Signin")
    }
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                onChangeText={(name) => setUsername(name)}
                value={userName}
                style={styles.emailInput}
                placeholder="Enter User Name"
            />
            <TextInput
                onChangeText={(email) => setEmail(email)}
                value={email}
                style={styles.emailInput}
                placeholder="Enter your email"
            />

            <TextInput
                onChangeText={(password) => setPassword(password)}
                value={password}
                style={styles.emailInput}
                placeholder="Create Password"
                secureTextEntry={true}
            />
            <TextInput
                onChangeText={(password) => setConfirmPassword(password)}
                value={confirmPassword}
                style={styles.passwordInput}
                placeholder="Confirm Password"
                secureTextEntry={true}
            />

            <TouchableHighlight style={styles.button}>
                <Button title="Signup" style={styles.buttonText}
                onPress={handleSignup} 
                ></Button>
            </TouchableHighlight>

            <TouchableHighlight onPress={()=> navigation.navigate('Signin')}>
            <Text style={styles.buttonText}>Alread have an account?</Text>
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
    }
});