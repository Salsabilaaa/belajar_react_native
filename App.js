import React from 'react';
import { 
	Platform, 
	StyleSheet, 
	Text, 
	View,
	StatusBar
} from 'react-native';

import Login from './Screen/pages/Login';

export default class App extends React.Component {
  render() {
    return (
       <View style={styles.container}>
       	<StatusBar
    		backgroundColor="#1c313a"
     		barStyle="light-content"
   		/>
       	<Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  	backgroundColor:'pink',
  	flex: 1,
  	alignItems:'center',
  	justifyContent:'center'
  }
});
