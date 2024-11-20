import React from 'react';
import { View,Text,StyleSheet,Button} from "react-native-web"


const About=({navigaton})=>{
    return(
        <View style={styles.container}>
            <Text>Welcome to About Screen</Text>
            <Button title='Go back to home' onPress={()=> navigaton.goBack()}></Button>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent:'center',
    },
});
export default About;