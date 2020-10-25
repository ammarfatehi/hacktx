import React, { useState, useEffect } from 'react';
import {
    View,
    Modal,
    Text,
    StyleSheet,
    Image,
    Alert,
    ScrollView
} from 'react-native';
import Camera from '../components/Camera';
import AnimatedButton from '../components/AnimatedButton';
import theme from '../utils/theme';


function CameraScreen(props) {

    const [image, setImage] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState(null);
    const [data, setData] = useState(null)

    useEffect(() => {
        if (image !== null && modalVisible == true) {
            setModalVisible(false);
            detectText(image);
        }
    }, [image, modalVisible]);

    useEffect(() => {
        fetchData = async () => {
            //make api request here after text has been received from google api
            //set state variable to response (setData(response.***))
        }
        if (text !== null) {
            fetchData();
        }

    }, [text])

    const detectText = async (img) => {
        
        console.log(img)
        const fileToBase64 = (filename, filepath) => {
            return new Promise(resolve => {
              var file = new File([filename], filepath);
              var reader = new FileReader();
              // Read file content on file loaded event
              reader.onload = function(event) {
                resolve(event.target.result);
              };
              
              // Convert data to base64 
              reader.readAsDataURL(file);
            });
        };

        console.log(img.uri)
        const base64 = await fileToBase64("image", img.uri);
        console.log(base64)
        console.log(base64.length)
        let body = JSON.stringify({
            requests: [
                {
                    image: { 
                        source: {
                            imageUri: base64
                        } 
                    },
                    features: [
                        { 
                            type: "TEXT_DETECTION" 
                        }
                    ]
                }
            ]
        });
        console.log('making reqest');
        const response = await fetch("https://vision.googleapis.com/v1/images:annotate?key=" + "AIzaSyBSbxQIIUy0wusFqcnETVG996IlUyIIIkY", {
            method: 'POST',
            body
        });
        
        const temp = await response.json();
        console.log(temp);

        console.log(response)
        console.log('');

        // .then(response => {
        //     const json = response.json();

        //     if (response.ok) {
        //         setText(json)
        //     } else {
        //         Alert.alert('Uh-oh', 'unable to retreive information')
        //     }

        //     console.log(response);
        //     console.log(response.ok);
        //     console.log(Object.keys(response._bodyBlob._data.__collector));
        //     console.log(Object.keys(response._bodyInit._data.__collector));
        //     console.log(json)

        //     return json;
        // })
        // .catch(err => {
        //     console.log('Error', err)
        // })
    }


    if (image == null) {
        return (
            <View style={styles.container}>
                <Modal
                    animationType='slide'
                    visible={modalVisible}
                >
                    <Camera setImage={setImage} />

                </Modal>
                <AnimatedButton
                    color={theme.colors.lightGreen}
                    labelColor={theme.colors.black}
                    label='Scan an Object'
                    onPress={() => setModalVisible(true)}
                />
            </View>
        )
    }

    return (
        <View style={styles.dataContainer}>
            <Image
                source={image}
                style={{ height: 200, width: 200 }}
            />
            {text !== null && (
                <Text>Retrieving Information</Text>
            )}
            <AnimatedButton
                color={theme.colors.lightGreen}
                labelColor={theme.colors.black}
                label='Scan an Object'
                onPress={() => {
                    setImage(null);
                    setModalVisible(true);
                }}
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
        justifyContent: 'center',
        padding: 5,
        backgroundColor: theme.colors.lightGrey
    },
    dataContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        padding: 5,
        paddingTop: 20,
        backgroundColor: theme.colors.lightGrey
    }
})

export default CameraScreen;