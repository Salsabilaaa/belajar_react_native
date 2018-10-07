import React from 'react';
import {View, Text, Button, Image, TextInput}from 'react-native';
import {createStackNavigator, StackActions, NavigationActions} from 'react-navigation';
import Judull from './src/Judull';
class HomeScreen extends React.Component{
  render(){
    return(
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Image source={require('./fb.png')} style={{width:200, height:200}} />

                
                <TextInput
                    style={{width:200, height:40, marginTop:50}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}></TextInput>
                

                <TextInput
                    style={{width:200, height:50}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}></TextInput>


                <Button
          title="LOGIN"
          color='#6284d9'
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details'})
              ],
            }))
          }}
        />
      </View>
    );
  }  
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Judull/>
      </View>
    );
  }
}

export default createStackNavigator({
  Home : {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',

});