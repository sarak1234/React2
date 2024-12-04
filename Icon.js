import { View,Text,StyleSheet} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import React from "react";

const Icon = (props) =>{
    return(
        <View style={StyleSheet.iconConatiner}>
            <View style={StyleSheet.iconWrapper}>
                <MaterialCommunityIcons name={props.name} size={27} color="#22D4FF"></MaterialCommunityIcons>
            </View>
            <Text style={StyleSheet.iconText}>{props.iconText}</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    iconWrapper:{
        backgroundColor: '#384053',
        width: '100%',
        height:'100%',
        justifyContent :'center',
        alignItems:'center',
        borderRadius:50
    },
    iconConatiner:{
        alignItems:'center',
        width: 60,
        height:60
    },
    iconText:{
        height:20,
        fontWeight:'600'
    }
});
export default Icon;