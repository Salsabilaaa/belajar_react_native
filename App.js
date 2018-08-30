/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Component/Judul';

export default class App extends React.Component {
  render() {
    return (
       <View style={styles.container}>
       <Judul/>
        <Text style={styles.instructions}>Nama: Salsabila Cahya Alifia </Text>
        <Text style={styles.instructions}>Kelas: XIRPL 3 </Text>
        <Text style={styles.instructions}>No.Absen: 36 </Text>
        <Image style={{width: 300, height:300}}
        source={require('./sabil.png')}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 10,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 25,

  },
});
