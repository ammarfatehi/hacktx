import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Modal,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native';

//screens
import SignUpScreen from './SignUpScreen';

//components
import AnimatedButton from '../components/AnimatedButton'

//utils
import theme from '../utils/theme';
import app from '../config/firebase';
import close from '../assets/icons/close.png'

function SignInScreen(props) {

    const {
        setLoggedIn,
    } = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [viewModal, setViewModal] = useState(false)


    const signIn = () => {
        app.auth().signInWithEmailAndPassword(username, password)
            .then((user) => setLoggedIn(true))
            .catch((error) => setError(error.message));
    }


    return (
        <View style={styles.container}>
            <Modal
                animationType='slide'
                visible={viewModal}
            >
                <SignUpScreen closeModal={() => setViewModal(false)}/>
                


            </Modal>

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

            <AnimatedButton
                color={theme.colors.white}
                labelColor={theme.colors.black}
                label='Sign Up'
                onPress={() => setViewModal(true)}
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
    },
    icon: {
        height: 30,
        width: 30,
        marginTop: 0,
        tintColor: theme.colors.black
    },
    signInput: {
        height: 45,
        borderColor: theme.colors.black,
        borderBottomWidth: 1,
        width: '90%',
        paddingHorizontal: 5,
        marginBottom: 10,
        color: theme.colors.black,
        fontSize: 16,
        fontWeight: theme.font.weight.semibold
    },
    signText: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 5,
        marginBottom: 20,
        fontSize: 12
    }
})

export default SignInScreen;