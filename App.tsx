import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { v4 as uuid_v4 } from "uuid";
import Input from './components/Input'
import  Button from "./components/Button";
import  RowContainer from "./components/RowContainer";
import ListItem from './components/ListItem';
import BottomTabNavigator from "./navigation/BottomTabNavigator"



type Todo = {
  id: string,
  text: string,
  isDone: boolean,
}


const App: React.FC = () => {

  const darkPurple = "#7739db"
  const lightPurple = "#d3b8ff"

  const [todoList, setTodoList] = useState<Todo[]>([{id: uuid_v4(), text: 'Hej Korre', isDone: false}, {id: uuid_v4(), text: 'Hej Sara', isDone: true}])
  const [filterTodoList, setFilterTodoList] = useState<Todo[]>([...todoList])
  const [inputValue, setInputValue] = useState<string>('')

  const addTodoHandler = () => {
    setFilterTodoList(prev => prev.concat({id: uuid_v4(), text: inputValue, isDone: false}))
    setTodoList([...filterTodoList])
    setInputValue('')
  }

  const deleteTodoHandler = (id: string) => {
    setFilterTodoList(prev => [...prev].filter( todo => todo.id !== id))
    setTodoList([...filterTodoList])
  }

  const onCheck = (id: string) => {
    const copyTodoList = [...todoList]
    let todo = copyTodoList.find( item => item.id == id)!
    const index = copyTodoList.indexOf(todo)
    
    todo.isDone =! todo.isDone
    
    copyTodoList[index] = todo

    setFilterTodoList(copyTodoList)
  }

  const filterHanlder = (filter: string) => {
    switch (filter) {
      case 'all':
        return setFilterTodoList([...todoList]);
        
      case 'todo':
        return setFilterTodoList(todoList.filter( todo => todo.isDone == false));
        
      case 'done':
        return setFilterTodoList(todoList.filter( todo => todo.isDone == true));

      default:
        break;
    }
  }

  return (
    <BottomTabNavigator></BottomTabNavigator>
    /*<SafeAreaView style={styles.container}>
      <RowContainer>
        <Input placeholder={'Write your todo here...'} value={inputValue} onChangeText={text => setInputValue(text)}></Input>
        <Button onPress={addTodoHandler} text={"Add todo"} bgColor={lightPurple} borderColor={darkPurple}></Button>
      </RowContainer>
      <RowContainer>
        <Button onPress={() => filterHanlder("all")} text={"All"} bgColor={lightPurple} borderColor={darkPurple}></Button>
        <Button onPress={() => filterHanlder("todo")} text={"Todo"} bgColor={lightPurple} borderColor={darkPurple}></Button>
        <Button onPress={() => filterHanlder("done")} text={"Done"} bgColor={lightPurple} borderColor={darkPurple}></Button>
      </RowContainer>
      
      <FlatList style={{ width: '100%', marginHorizontal: 'auto'}}
       data={filterTodoList}
       renderItem={({item}) =>
        <ListItem 
          todoText={item.text} 
          onDelete={() => deleteTodoHandler(item.id)} 
          isDone={item.isDone} 
          onCheck={() => onCheck(item.id)}></ListItem>
        }
      />
    </SafeAreaView>*/
  ); 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    color: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default App