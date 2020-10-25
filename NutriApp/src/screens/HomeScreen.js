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


function HomeScreen(props) {
    
    return(
        <>
        <ItemCard />
        </>
    )
}

export default HomeScreen;