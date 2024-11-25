import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home2';
import About from './screens/About2';

const Stack = createStackNavigator();
const screenOptionStyle={
    headerStyle : {
        backgroundColor: '#FF6247'
    },
    headerTintColor: 'white'
}
const MainStackNavigator = ({navigator})=> {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
        </Stack.Navigator>
    );
}
const AboutStackNavigaor = ({navigaton})=>{
    return(
        <Stack.Navigator screenOption={screenOptionStyle}>
            <Stack.Screen name="About" component={About}></Stack.Screen>
        </Stack.Navigator>
    );
}
export {MainStackNavigator,AboutStackNavigaor};