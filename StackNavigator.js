import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import About from './About';

const Stack=createStackNavigator();

const screenOptionStyle={
    headerStyle:{
        backgroundColor:'#FF6347',
    },
    headerTintColor:'white',

}

const MainStackNavigator=({navigation})=>{
    return(
        <Stack.Navigation screenOption={screenOptionStyle}>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='About' component={About}/>
        </Stack.Navigation>
    );
}
export default MainStackNavigator;