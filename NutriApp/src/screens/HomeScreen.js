import React, { Component, useState } from 'react';
import AnimatedButton from '../components/AnimatedButton'
import ItemCard from '../components/ItemCard'
// import account from '../assets/close.png';

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

import Icon from 'react-native-vector-icons/Ionicons'
import theme from '../utils/theme';
function HomeScreen(props) {
    
    return(
        <>
        <ItemCard />
        </>
    )
}

export default HomeScreen;

