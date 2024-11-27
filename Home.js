import { Button } from "react-native-web";
import{View,Text,StyleSheet,Button} from 'react-native';

const Home=({navigaton})=>{
    return(
        <View style={styles.container}>
            <Text>Welcome to Home Screen!</Text>
            <Button title="Go to About Screen" onPress={()=> navigaton.navigate('About')}></Button>
            <Text>Drawer Navigation Button Functionality</Text>
            <Button title="Open Drawer" onPress={()=> navigaton.openDrawer()}></Button>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent:'center',
    },
});

export default Home;