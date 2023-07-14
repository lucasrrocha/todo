import { useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Tasks } from "../../components/Taks";

import { Container, CountersContainer, CountersWrapper, InputWrapper, Numbers, Title, Wrapper } from "./styles";

import { ListEmpty } from "../../components/ListEmpty";

interface Task {
  checked: boolean;
  task: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState('');

  const newTaskNameInputRef = useRef<TextInput>(null);

  function handleNewTask() {
    if (taskDescription === '') {
      return Alert.alert('Tarefa em branco!', 'Por favor, escreva uma tarefa para adicionar.');
    }

    //With inputRef the value of input doesn't clean
    newTaskNameInputRef.current?.blur();

    setTasks(prevState => [...prevState, { checked: false, task: taskDescription }])
    setTaskDescription('');
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

  return (
    <>
      <Header />

      <Container>
        <InputWrapper>

          <Input
            inputRef={newTaskNameInputRef}
            placeholder="Adicione uma nova tarefa"
            onChangeText={setTaskDescription}
            value={taskDescription}
          />

          <Button
            variant='BASE'
            icon='plus-circle'
            onPress={handleNewTask}
          />

        </InputWrapper>

        <CountersContainer>

          <Wrapper>

            <Title created>Criadas</Title>

            <CountersWrapper>
              <Numbers>{tasks.length}</Numbers>
            </CountersWrapper>

          </Wrapper>

          <Wrapper>

            <Title>Concluídas</Title>

            <CountersWrapper>
              <Numbers>{handleFinishedTasks()}</Numbers>
            </CountersWrapper>

          </Wrapper>

        </CountersContainer>

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
            <ListEmpty
              title='Você ainda não tem tarefas cadastradas'
              subtitle='Crie tarefas e organize seus itens a fazer'
            />
          }
        />

      </Container>
    </>
  )
}