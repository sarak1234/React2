import {AboutStackNavigator} from "./StackNavigator";
import BottomTabNavigator from "./TabNavigation";
import {createDrawerNavigator} from './TabNavigation';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabNavigator}></Drawer.Screen>
            <Drawer.Screen name="About" component={BottomTabNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
}