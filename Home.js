import { Button } from "react-native-web";
import{View,Text,StyleSheet,Button} from 'react-native';

const Home=({navigaton})=>{
    return(
        <View style={styles.container}>
            <Swiper autoplay activeDotColor="#22d4ff" autoplayTimeout={5}>
                <View style={styles.item}>
                    <Image source={require('../assets/icon.png')} style={styles.imgItem} resixeMode='cover'></Image>
                </View>
            <Text>Welcome to Home Screen!</Text>
            <Button title="Go to About Screen" onPress={()=> navigaton.navigate('About')}></Button>
            <Text>Drawer Navigation Button Functionality</Text>
            <Button title="Open Drawer" onPress={()=> navigaton.openDrawer()}></Button>
            </Swiper>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
       // flex:1,
        backgroundColor:'#fff',
       // alignItems: 'center',
        justifyContent:'center',
    },
    sliderContainer:{
        width:'90%',
        height:200,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:10,
        borderRadius:8
    },
    imgItem:{
        width: '100%',
        height:'100%',
        borderRadius: 8
    },
    item:{
        flex:1,
        justifyContent:'center'
    }
});

export default Home;