import { Image, View } from "react-native";
import logoImg from "./../../assets/logoImg.png";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} />
    </View>
  );
}
