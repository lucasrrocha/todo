import { Alert, FlatList, Image, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { styles } from "./styles";

import { useState } from "react";
import { Tasks } from "../../components/Taks";

import Clipboard from '../../assets/images/Clipboard.png';

interface Task {
  checked: boolean;
  task: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskDescription, setTaskDescription] = useState('')
  const [isFocused, setIsFocused] = useState(false);

  function handleNewTask() {
    if (taskDescription === '') {
      return Alert.alert('Tarefa em branco!', 'Por favor, escreva uma tarefa para adicionar.');
    }

    setTasks(prevState => [...prevState, { checked: false, task: taskDescription }])
    setTaskDescription('')
  }

  function handleRemoveTask(index: number) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks)
  }


  function handleCheckbox(index: number) {
    const updatedTasks = [...tasks];
    const updatedChecked = updatedTasks[index]
    updatedChecked.checked = !updatedChecked.checked
    setTasks(updatedTasks);
  }

  const handleFinishedTasks = (): number => {
    const checkedItems = tasks.filter((item) => item.checked === true);
    return checkedItems.length
  };

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', top: -30 }}>
          <Input
            onChangeText={setTaskDescription}
            value={taskDescription}
            onFocus={handleFocus}
            onBlur={handleBlur}
            isFocused={isFocused}
          />
          <Button
            variant='BASE'
            icon='plus-circle'
            onPress={handleNewTask}
          />
        </View>

        <View style={styles.counters}>
          <View style={styles.wrapper}>
            <Text style={[styles.created, styles.textCounters]}>Criadas</Text>
            <View style={styles.countersWrapper}>
              <Text style={styles.countersText}>{tasks.length}</Text>
            </View>
          </View>

          <View style={styles.wrapper}>
            <Text style={[styles.finished, styles.textCounters]}>Concluídas</Text>
            <View style={styles.countersWrapper}>
              <Text style={styles.countersText}>{handleFinishedTasks()}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item, index }) =>
            <Tasks
              key={index}
              task={item.task}
              onRemove={() => handleRemoveTask(index)}
              onValueChange={() => handleCheckbox(index)}
              value={item.checked}
            />
          }
          ListEmptyComponent={() =>
            <View style={styles.emptyList}>
              <Image source={Clipboard} style={styles.imageEmpty} />
              <Text style={[styles.textEmpty, styles.textBold]}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.textEmpty}>Crie tarefas e organize seus itens a fazer</Text>
            </View>}
        />

      </View>
    </>
  )
}