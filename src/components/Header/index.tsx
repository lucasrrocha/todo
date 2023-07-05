import { Image, View } from "react-native";
import { styles } from "./styles";

import Logo from '../../assets/images/Logo.png';


export function Header() {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  )
}