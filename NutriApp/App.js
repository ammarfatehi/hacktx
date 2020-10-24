import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

//Screens
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen';
import AccountScreen from './src/screens/AccountScreen';

//Utils and Assets
import theme from './src/utils/theme';
import homeIcon from './src/assets/icons/home.png';
import photoIcon from './src/assets/icons/camera.png';
import accountIcon from './src/assets/icons/account.png';

function App(props) {

  const [page, setPage] = useState('home');
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='green' />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>NutriApp</Text>
        </View>


        <View style={styles.pageContainer}>
          {
            page == 'home' ? (
              <HomeScreen/>
            ) : page == 'account' ? (
              <AccountScreen/>
            ) : page == 'camera' ? (
              <CameraScreen/>
            ) : null
          }
        </View>


        <View style={styles.navbar}>
          <TouchableOpacity 
            onPress={() => setPage('home')}
          >
            <Image 
              source={
                homeIcon
              }
              style={[styles.icon, {tintColor: page == 'home' ? theme.colors.green : theme.colors.black}]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPage('camera')}
          >
            <Image 
              source={
                photoIcon
              }
              style={[styles.icon, {tintColor: page == 'camera' ? theme.colors.green : theme.colors.black}]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPage('account')}
          >
            <Image 
              source={
                accountIcon
              }
              style={[styles.icon, {tintColor: page == 'account' ? theme.colors.green : theme.colors.black}]}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: 'green'
  },
  container: {
    display: 'flex', 
    flexDirection: 'column', 
    height: '100%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: theme.colors.white, 
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.black, 
  },
  headerText: {
    color: theme.colors.green,
    fontFamily: theme.font.family.title,
    fontSize: theme.font.size.title,
    fontWeight: theme.font.weight.bold
  }, 
  pageContainer: {
    display: 'flex', 
    flexDirection: 'column', 
    flexGrow: 1
  }, 
  navbar: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    backgroundColor: theme.colors.white, 
    padding: 15, 
    borderTopWidth: 1, 
    borderTopColor: theme.colors.black
  }, 
  icon: {
    height: 30,
    width: 30,
    marginTop: 0,
    tintColor: theme.colors.black
  }
});

export default App;
