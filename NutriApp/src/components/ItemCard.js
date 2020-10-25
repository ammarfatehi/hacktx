import React, { Component, useState } from 'react';
import AnimatedButton from '../components/AnimatedButton'
// import account from '../assets/close.png';
import testdata from './testdata.json'
import CameraScreen from '../screens/CameraScreen'
import ExpandedScreen from '../screens/ExpandedScreen'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    Modal,
    ImageBackground
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import theme from '../utils/theme';





export default function ItemCard (props) {
    const [search, setSearch] = useState('')
    const [queries, setQueries] = useState([
        { name: 'Ascorbic Acid', key: '1'},
        { name: 'Sodium Ascorbate', key: '2'},
        { name: 'Cholecalcifero', key: '3'},
        { name: 'Di-Alpha-Tocopheryl Acetate', key: '4'},
        { name: 'Inositol Niacinate', key: '5'},
        { name: 'Pyridoxine HCI', key: '6'},
        { name: 'Folate', key: '7'},
        { name: 'Cyanocobalamin', key: '8'},
        { name: 'Calcium D-Pantothenate', key: '9'},
        { name: 'Chromium Picolinat', key: '10'},
        { name: 'Molybdenum Citrate', key: '11'},
        { name: 'Retinyl Palmitate', key: '12'},
        { name: 'Ethyl alchohol', key: '13'},
        { name: 'water', key: '14'},
        { name: 'carbomer', key: '15'},
        { name: 'acrylates', key: '16'},
        { name: 'fragrance', key: '17'},
        { name: 'glycerin', key: '18'},
        { name: 'isopropyl myristate', key: '19'},
        { name: 'tocopheryl acetate', key: '20'},
        { name: 'Dimethicone', key: '21'},
        { name: 'Water', key: '22'},
        { name: 'Glycerin', key: '23'},
        { name: 'Distearyldimonium', key: '24'},
        { name: 'Chloride', key: '25'},

    ]);
    
    

    
    const [expand, setexpand] = useState('expand')
    const [show, setShow] = useState('false')
    const [selected,setSelected] = useState('')



    return(
        <>
            <View style={styles.container}>
                <TextInput placeholder= "Search..." style={styles.input} onChangeText={(Text) => setSearch(Text)}/>
                <View style={{margin:0, marginTop:1, marginBottom: 50}}>
                <FlatList
                    data={queries}
                    renderItem={( { item } ) => (
                        <View style>
                            <TouchableOpacity activeOpacity={.3} onPress={() => {setSelected(item.name); setShow(true) } }>
                            <Text style = {styles.item}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                        
                    )}
                />
                <Modal visible={show} transparent={true} animationType={'slide'}>
                    <View style={styles.pop_up}>
                        <ExpandedScreen name = {selected}/>
                        <Button title="close" onPress={() => {setShow(false)}} color="green"/>
                    </View> 
                </Modal>
                </View>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: 100,
        width: '100%',
        paddingHorizontal: 10,
        paddingTop: 10,
        backgroundColor: theme.colors.lightGrey
    },

    item: {
        textAlignVertical: 'center',
        textAlignVertical: 'center',
        fontSize: 24,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        height: 85,
        borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 10,
        marginTop: 6,
        textAlign: 'left',
        backgroundColor: theme.colors.white
    },
    input: {
        borderColor: 'black',
        borderWidth: 0,
        height: 40,
        borderRadius:20,
        paddingHorizontal:20,
        backgroundColor: 'white'
    },
    pop_up:{
        margin:10,
        marginTop:115, 
        backgroundColor:theme.colors.white, 
        height: 480,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: theme.colors.lightGrey,
    }

    
});