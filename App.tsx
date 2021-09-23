import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native'

type Todo = {
  id: string,
  text: string
}


const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([{id: '123d', text: 'Hej Korre'}, {id: '123', text: 'Hej Sara'}])
  const [inputValue, setInputValue] = useState<string>('')

  const addTodoHandler = () => {
    setTodoList(prev => prev.concat({id: Math.floor(Math.random() * 1000).toString(), text: inputValue}))
    setInputValue('')
  }

  const deleteTodoHandler = (id:string) => {
    setTodoList(prev => [...prev].filter( todo => todo.id !== id))
  }
  //testar git 

  return (
    <SafeAreaView style={styles.container}>
      
      <TextInput onChangeText={text => setInputValue(text)} value={inputValue} style={styles.input} placeholder={'Skriv en ny todo...'} />
      <TouchableOpacity onPress={addTodoHandler}>
        <View style={styles.button}>
          <Text>Add Todo</Text> 
        </View>
      </TouchableOpacity>
      <FlatList style={{marginTop: 20, width: '100%', marginHorizontal: 'auto'}}
      //  keyExtractor={todo => todo.id}
       data={todoList}
       renderItem={({item}) =>
          <View style={styles.todoTextWrapper}>
            <Text>{item.text} </Text> 
            <Text style={styles.delete} onPress={() => deleteTodoHandler(item.id)}>Delete</Text>
          </View>
        }
       />
    </SafeAreaView>
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
  button: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8
  },
  input: {
    backgroundColor: 'white',
    width: '60%',
    padding: 6,
    borderRadius: 50,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    marginVertical: 20
  },
  todoTextWrapper:{
    backgroundColor: 'peachpuff',
    color:'black',
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 12,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  delete:{
    color: 'red'
  }
});

export default App