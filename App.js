import React from 'react';
import {   
  StyleSheet,
  Text, 
  View,
  StatusBar
} from 'react-native';

import Login from './Screen/pages/Login';
import Signup from './Screen/pages/Signup';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar
     				backgroundColor="blue"
     				barStyle="light-content"
  				 />
  				 <Signup/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		backgroundColor:'#455a64',
		flex: 1,
		alignItems:'center',
		justifyContent:'center'
	}
});
