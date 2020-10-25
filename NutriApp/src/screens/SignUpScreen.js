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

//components
import AnimatedButton from '../components/AnimatedButton'

//utils
import theme from '../utils/theme';
import app from '../config/firebase';
import close from '../assets/icons/close.png'


function SignUpScreen(props) {

    const {
        closeModal
    } = props;

    const[firstName, setFirst] = useState('');
    const[lastName, setLast] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[editable, setEditable] = useState(true);
    const[message, setMessage] = useState(null)

    const createAccount = async () => {
        setEditable(false);
        await app.auth().createUserWithEmailAndPassword(email, password).then((user) => closeModal()).catch((error) => {
            setEditable(true);
            setMessage(error.message);
        })
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row-reverse', paddingHorizontal: 10, width: '100%' }}>
                        <TouchableOpacity onPress={closeModal}>
                            <Image
                                source={close}
                                style={styles.icon}
                            />
                        </TouchableOpacity>

                    </View>
                    <Text style={{ fontSize: theme.font.size.title, fontWeight: theme.font.weight.bold, fontFamily: theme.font.family.title, marginBottom: 20 }}>
                        Create an Account
                    </Text>

                    <TextInput
                        style={styles.signInput}
                        onChangeText={(text) => setFirst(text)}
                        selectionColor={theme.colors.black}
                        autoCapitalize='none'
                        editable={editable}
                    />
                    <Text style={styles.signText}>First Name</Text>
                    <TextInput
                        style={styles.signInput}
                        onChangeText={(text) => setLast(text)}
                        selectionColor={theme.colors.black}
                        autoCapitalize='none'
                        editable={editable}
                    />
                    <Text style={styles.signText}>Last Name</Text>
                    <TextInput
                        style={styles.signInput}
                        onChangeText={(text) => setEmail(text)}
                        selectionColor={theme.colors.black}
                        autoCapitalize='none'
                        editable={editable}
                    />
                    <Text style={styles.signText}>Email</Text>
                    <TextInput
                        style={styles.signInput}
                        onChangeText={(text) => setPassword(text)}
                        selectionColor={theme.colors.black}
                        autoCapitalize='none'
                        editable={editable}
                    />
                    <Text style={styles.signText}>Password</Text>
                    {message && (
                        <Text style={{color: 'red'}}>{message}</Text>
                    )}
                    <AnimatedButton
                        color={theme.colors.lightGreen}
                        labelColor={theme.colors.black}
                        label='Sign Up'
                        onPress={() => createAccount()}
                    />


                </SafeAreaView>
    )

}

const styles = StyleSheet.create({
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

export default SignUpScreen;