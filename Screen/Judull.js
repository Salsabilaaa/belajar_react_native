import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image} from 'react-native';

export default class Judull extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.judul}>Hello Diva! Selamat Datang di Biodata Anda</Text>
        <Text style={styles.tulis}>Nama : Salsabila Cahya Alifia</Text>
        <Text style={styles.tulis}>No : 36</Text>
        <Text style={styles.tulis}>Kelas : XI RPL 3</Text>
        <Text style={styles.tulis}>Sekolah : SMK Telkom Purwokerto</Text>
        <Text style={styles.tulis}>Alamat : Kroya, Cilacap, Jawa Tengah, Indonesia</Text>
        <Image source={require('./sabil.png')} style={{width: 340, height: 433}}/>
      </View>
      )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  judul: {
    fontSize: 27,
    textAlign: 'center',
    margin: 10,
    color : '#00ff'
  },
  tulis: {
  fontSize: 18,
    textAlign: 'center',
    color: '#2a2a',
    marginBottom: 5,
  },
});