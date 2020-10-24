import React from 'react';

import {
    View,
    Text,
} from 'react-native';
import { RNCamera } from 'react-native-camera'

function CameraScreen(props) {

    return(
        <View>
            <Text>
                Camera Screen
            </Text>
            <RNCamera
                style={{ flex: 1, alignItems: 'center' }}
            />

        </View>
    )
}


export default CameraScreen;