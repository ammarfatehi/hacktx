import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';
import cameraIcon from "../assets/icons/camera.png";
import {TouchableOpacity, Alert, StyleSheet, Image, View} from 'react-native';

export default class Camera extends PureComponent{
  constructor(props) {
    super(props);
      this.state = {
      takingPic: false,
    };
  }
  takePicture = async () => {
    if (this.camera && !this.state.takingPic) {

      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      this.setState({takingPic: true});

      try {
         const data = await this.camera.takePictureAsync(options);
         Alert.alert('Success', JSON.stringify(data));
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        this.setState({takingPic: false});
      }
    }
  };
  render() {
    return (
      <RNCamera
        ref={(ref) => {
          this.camera = ref
        }}
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnAlignment}
          onPress={this.takePicture}
        >
          <Image
            source={cameraIcon}
            style={{height: 40, width: 40, tintColor: 'white'}}
          />

        </TouchableOpacity>
      </RNCamera>
     );
   }
}
const styles = StyleSheet.create({
   btnAlignment: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 20,
    },
});