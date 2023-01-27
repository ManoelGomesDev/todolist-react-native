import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./task";

import { Entypo } from "@expo/vector-icons";

interface TaskProps {
  name: string;
  done?: boolean;
  onRemove: () => void;
  onComplete: () => void;
}

export function Task({ name, done, onRemove, onComplete }: TaskProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onComplete}>
        {done ? (
          <Ionicons name="checkmark-circle-sharp" size={24} color="#4EA8DE" />
        ) : (
          <Entypo name="circle" size={24} color="#4EA8DE" />
        )}
      </TouchableOpacity>
      <View style={{ width: "80%" }}>
        <Text style={done ? styles.titleTaskDone : styles.titleTask}>
          {name}
        </Text>
      </View>
      <TouchableOpacity onPress={onRemove}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={24}
          color="#808080"
        />
      </TouchableOpacity>
    </View>
  );
}
