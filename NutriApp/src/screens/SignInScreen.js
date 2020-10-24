import React, {useState, useEffect} from 'react';

import {
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
} from 'react-native';

//components
import AnimatedButton from '../components/AnimatedButton'

//utils
import theme from '../utils/theme';
import app from '../config/firebase';

function SignInScreen(props){

    const {
        setLoggedIn,
    } = props;

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState(null);


    const signIn = () => {
        app.auth().signInWithEmailAndPassword(username, password)
        .then((user) => setLoggedIn(true))
        .catch((error) => setError(error.message));
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>NutriApp</Text>
            {error && (
                <Text style={styles.errorMessage}>
                    {error}
                </Text>
            )}
            <TextInput 
                style={styles.textInput}
                onChangeText={(text) => setUsername(text)}
                placeHolder="Username"
                placeholderTextColor={theme.colors.white}
                selectionColor={theme.colors.white}
                textAlign='center'
                autoCapitalize='none'
            />
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => setPassword(text)}
                placeHolder="Password"
                selectionColor={theme.colors.white}
                textAlign='center'
                secureTextEntry
            />
            
            <AnimatedButton
                color={theme.colors.white}
                labelColor={theme.colors.black}
                label='Sign In'
                onPress={() => signIn()}
            />
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column', 
        padding: 40, 
        alignItems: 'center', 
        backgroundColor: theme.colors.green, 
        width: '100%', 
        height: '100%', 
        justifyContent: 'center'
    }, 
    textInput: {
        height: 45, 
        borderColor: theme.colors.white, 
        borderWidth: 1, 
        width: '75%', 
        paddingVertical: 5, 
        paddingHorizontal: 20,
        margin: 10, 
        color: theme.colors.white, 
        borderRadius: 20, 
    }, 
    title: {
        color: theme.colors.white, 
        fontSize: 32, 
        fontWeight: theme.font.weight.bold, 
        fontFamily: theme.font.family.title, 
        paddingBottom: 50
    }, 
    button: {
        backgroundColor: 'purple'
    }, 
    errorMessage: {
        color: 'red', 
        margin: 5, 
        fontFamily: theme.font.family.title, 
        fontWeight: theme.font.weight.semibold
    }
})

export default SignInScreen;