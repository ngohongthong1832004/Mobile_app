import { View, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';


export default function Header() {
    return (
      <View >
        <StatusBar style="auto" />
        <Image
          style={styles.headerTitle}
          source={require("../AwesomeProject/assets/1.jpg")}
        />
      </View>
    );
}