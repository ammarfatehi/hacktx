import React from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

//components
import AnimatedButton from '../components/AnimatedButton'

//utils
import theme from '../utils/theme';
import app from '../config/firebase';

function AccountScreen(props) {

    const {
        setLoggedIn
    } = props;

    const signOut = async () => {
        console.log('going to sign out');
        await app.auth().signOut().catch((error) => {
            console.log(error.message);
        });
        console.log('successfully signed out');
        setLoggedIn(false);
    }

    return(
        <View style={styles.container}>
            <AnimatedButton
                color={theme.colors.lightGreen}
                labelColor={theme.colors.black}
                label='Sign Out'
                onPress={() => signOut()}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1, 
        flexDirection: "column", 
        alignItems: 'center', 
        padding: 5, 
        backgroundColor: theme.colors.lightGrey
    }
})


export default AccountScreen;