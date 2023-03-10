import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Tasks />
    </View>
  );
}
