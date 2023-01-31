import { FlatList, View } from "react-native";

import {
  BtnAdd,
  Container,
  ContainerTasks,
  ContainerTaskStatus,
  HeaderTasks,
  Icon,
  Input,
} from "./styles";
import { Task } from "../Task";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import { CountNumber } from "../CountNumber";
import { TitleStatusText } from "../TitleStatusText";
import theme from "../../theme";

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

  const { COLORS } = useTheme();

  return (
    <View>
      <Container>
        <Input
          onChangeText={(text) => setNewTaskName(text)}
          value={newTaskName}
        />
        <BtnAdd onPress={handleAddTask}>
          <Icon name="add-circle-outline" />
        </BtnAdd>
      </Container>
      <ContainerTasks>
        <HeaderTasks>
          <ContainerTaskStatus>
            <TitleStatusText
              title="Criadas"
              style={{ color: theme.COLORS.BLUE }}
            />
            <CountNumber amountTask={tasks.length} />
          </ContainerTaskStatus>
          <ContainerTaskStatus>
            <TitleStatusText
              title="Concluídas"
              style={{ color: theme.COLORS.PURPLE }}
            />
            <CountNumber amountTask={tasksDone.length} />
          </ContainerTaskStatus>
        </HeaderTasks>
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
      </ContainerTasks>
    </View>
  );
}
