import React, { Component, useState } from 'react';
import ItemCard from '../components/ItemCard';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    TouchableHighlight,
    Button
} from 'react-native';

import theme from '../utils/theme';
function ExpandedScreen(props) {
    const name = props.name; 
    const [apireturn,setApireturn] = useState('');
    const Http = new XMLHttpRequest();
    const url='https://hacktx3.azurewebsites.net/wikipedia?q='+name;
    console.log(url);
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {  
        {setApireturn(JSON.parse(Http.responseText).results[0].text)}
        
    }
    return(
        <View>
            <Text style={styles.title}>
                {name} 
            </Text>
            
            <Text style={styles.type}>
                {apireturn}
            </Text>
        </View>
    )
}

export default ExpandedScreen;

const styles = StyleSheet.create({
    title: {
        fontFamily: theme.font.family.title,
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        paddingTop: 15,
    },
    type: {
        paddingTop: 0,
        paddingBottom: 10,
        margin: 20,
        fontFamily: theme.font.family.title,
        fontSize: 16,

    },
});