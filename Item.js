import React from "react";
import { View,Text,Styleshee, ImageBackground } from "react-native-web";

const Item = ({item}) => {
    return(
        <View style={Stylesheet.cardContainer}>
            <View style={Styleshee.imgConatiner}>
            <Image source={{url : `${item.image}`}} style={Styleshee.img} resizeMode="cover"></Image>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.desc}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    );
}
const styles =Stylesheet.create({
    cardContainer:{
        width:"100%",
        height:130,
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:8,
        margonBottom:16,
    },
    img: {
        width:100,
        height:'90%',
        borderRadius:8,
        marginTop: 5
    },
    textContainer:{
        paddingHorizontal:10
    }
});
export default Item;