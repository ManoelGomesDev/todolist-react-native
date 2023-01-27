import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { Task } from "../Task";
import { useState } from "react";

interface Task {
  name: string;
  done: boolean;
}

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState("");

  const tasksCreated = tasks.length;

  const tasksDone = tasks.filter((task) => task.done === true);

  function handleAddTask() {
    setTasks((oldstate) => [...oldstate, { name: newTaskName, done: false }]);
    setNewTaskName("");
  }

  function handleRemoveTask(name: string) {
    const newTasksList = tasks.filter((task) => task.name !== name);

    setTasks(newTasksList);
  }

  function handleCompleteTask(name: string) {
    const tasksUpdate = tasks.map((task) => {
      if (task.name === name) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    setTasks(tasksUpdate);
  }

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.taskDescription}
          onChangeText={(text) => setNewTaskName(text)}
          value={newTaskName}
        />
        <TouchableOpacity style={styles.btnAdd} onPress={handleAddTask}>
          <Ionicons name="add-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTasks}>
        <View style={styles.headerTasks}>
          <View style={styles.statusTasks}>
            <Text style={styles.titleStatusTasks}>Criadas</Text>
            <View style={styles.count}>
              <Text style={{ color: "white" }}>{tasksCreated}</Text>
            </View>
          </View>
          <View style={styles.statusTasks}>
            <Text style={[styles.titleStatusTasks, { color: "#8284FA" }]}>
              Concluídas
            </Text>
            <View style={styles.count}>
              <Text style={{ color: "white" }}>{tasksDone.length}</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Task
              key={item.name}
              name={item.name}
              done={item.done}
              onComplete={() => {
                handleCompleteTask(item.name);
              }}
              onRemove={() => handleRemoveTask(item.name)}
            />
          )}
        />
      </View>
    </View>
  );
}
