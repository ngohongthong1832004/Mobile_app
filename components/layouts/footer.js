import { View, Image } from "react-native";


export default function Footer() {
    return (
      <View >
        <StatusBar style="auto" />
        <Image
          source={require("../AwesomeProject/assets/1.jpg")}
        />
      </View>
    );
}