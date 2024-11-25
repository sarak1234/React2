import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AboutStackNavigaor } from './StackNavigator2';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Tab=createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions = {{
                activeTintColor: 'white',
                inactiveTintColor: 'lightgray',
                style:{
                    backgroundColor: '#FF6347',
                },
                labelStyle:{
                    fontSize:12,
                }
            }}
            >
            <Tab.Screen
            name='Home'
            component={{
                tabBarLabel:'Home',
                tabBarIcon:({color})=>(
                    <MaterialCommunityIcons name="home" size={26} color={color}></MaterialCommunityIcons>
    )
            }}
            />

            <Tab.Screen
            name="About"
            component={AboutStackNavigaor}
            options={{
                tabBarLabel:'About',
                tabBarIcon({color}) => (
                    <MaterialCommunityIcons name="video-stabilization" size={26} color={color}/>
                )
            }}
            />

            </Tab.Navigator>
    );
}
export default BottomTabNavigator;