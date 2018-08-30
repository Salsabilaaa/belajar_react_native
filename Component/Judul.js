import React, {Component} from 'react'
import {Text} from 'react-native';

class Judul extends Component{
	render(){
		return (
			<Text style= {salon.judul}>Biodata</Text>
		)
	}
}

const salon = {
	judul: {
		color: "black",
		fontSize: 50,
		fontWeight: 'bold'
	}
}

export default Judul;