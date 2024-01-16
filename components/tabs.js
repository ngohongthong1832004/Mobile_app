import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./home";
import FormScreen from "./form";
import AboutScreen from "./about";

const Tab = createBottomTabNavigator();

export default function MyTabs () {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarVisible: false }} />
          <Tab.Screen name="Form" component={FormScreen} options={{ tabBarVisible: false }} />
          <Tab.Screen name="About" component={AboutScreen} options={{ tabBarVisible: false }} />
        </Tab.Navigator>
    )
  }
  