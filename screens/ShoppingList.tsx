// import React, {useState} from 'react';
// import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native'
// import { v4 as uuid_v4 } from "uuid";
// import Input from '../components/Input'
// import  Button from "../components/Button";
// import  RowContainer from "../components/RowContainer";
// import ListItem from '../components/ListItem';
// import Header from '../components/Header';
// import StyledContainer from '../components/Container';

// type Item = {
//   id: string,
//   text: string,
//   isDone: boolean,
// }

// const ShoppingList: React.FC = () => {

//   const darkPurple = "#7739db"
//   const lightPurple = "#d3b8ff"

//   const [shoppingList, setShoppingList] = useState<Item[]>([{id: uuid_v4(), text: 'Tomat', isDone: false}, {id: uuid_v4(), text: 'Ost', isDone: true}])
//   const [filterShoppingList, setFilterShoppingList] = useState<Item[]>([...shoppingList])
//   const [inputValue, setInputValue] = useState<string>('')

//   const addItem = () => {
//     setFilterShoppingList(prev => prev.concat({id: uuid_v4(), text: inputValue, isDone: false}))
//     setShoppingList([...filterShoppingList])
//     setInputValue('')
//   }

//   const deleteItem = (id: string) => {
//     setFilterShoppingList(prev => [...prev].filter( item => item.id !== id))
//     setShoppingList([...filterShoppingList])
//   }

//   const onCheck = (id: string) => {
//     const copyShoppingList = [...shoppingList]
//     let item = copyShoppingList.find( item => item.id == id)!
//     const index = copyShoppingList.indexOf(item)

//     item.isDone =! item.isDone

//     copyShoppingList[index] = item

//     setFilterShoppingList(copyShoppingList)
//   }

//   const filterHandler = (filter: string) => {
//     switch (filter) {
//       case 'all':
//         return setFilterShoppingList([...shoppingList]);

//       case 'to shop':
//         return setFilterShoppingList(shoppingList.filter( item => item.isDone == false));

//       case 'done':
//         return setFilterShoppingList(shoppingList.filter( item => item.isDone == true));

//       default:
//         break;
//     }
//   }

//return (

//   <SafeAreaView style={styles.container}>
//   <StyledContainer>
//   <RowContainer>
//       <Input placeholder={'Write item to shop...'} value={inputValue} onChangeText={text => setInputValue(text)}></Input>
//       <Button onPress={addItem} text={"Add"} bgColor={lightPurple} borderColor={darkPurple}></Button>
//     </RowContainer>
//     <RowContainer>
//       <Button onPress={() => filterHandler("all")} text={"All"} bgColor={lightPurple} borderColor={darkPurple}></Button>
//       <Button onPress={() => filterHandler("to shop")} text={"To Shop"} bgColor={lightPurple} borderColor={darkPurple}></Button>
//       <Button onPress={() => filterHandler("done")} text={"Done"} bgColor={lightPurple} borderColor={darkPurple}></Button>
//     </RowContainer>
//   </StyledContainer>

//     <Header title={"Shopping List"}></Header>
//     <FlatList style={{ width: '100%', marginHorizontal: 'auto'}}
//      data={filterShoppingList}
//      renderItem={({item}) =>
//       <ListItem
//         todoText={item.text}
//         onDelete={() => deleteItem(item.id)}
//         isDone={item.isDone}
//         onCheck={() => onCheck(item.id)}></ListItem>
//       }
//     />
//   </SafeAreaView>
// );
//}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#e6e6e6',
//     color: 'white',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

// });
import CustomMultiPicker from "react-native-multiple-select-list";

import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import MultiSelect from "react-native-multiple-select";
import SelectBox from "react-native-multi-selectbox-typescript";
import { xorBy } from "lodash";

const ShoppingList: React.FC = () => {
  const K_OPTIONS = [
    {
      item: "Juventus",
      id: "JUVE",
    },
    {
      item: "Real Madrid",
      id: "RM",
    },
    {
      item: "Barcelona",
      id: "BR",
    },
    {
      item: "PSG",
      id: "PSG",
    },
    {
      item: "FC Bayern Munich",
      id: "FBM",
    },
  ];

  const [selectedTeams, setSelectedTeams] = useState([]);

  // const onSelectedItemsChange = (selectedItems) => {
  //   setSelectedItems(selectedItems);
  // };

  const onMultiChange = () => {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], "id"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 30 }}>
        <Text style={{ fontSize: 20, paddingBottom: 10 }}>
          MultiSelect Demo
        </Text>
        <SelectBox
          label="Select multiple"
          options={K_OPTIONS}
          selectedValues={selectedTeams}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
          labelStyle={{ color: "grey" }}
          containerStyle={{
            borderColor: "grey",
            borderRadius: 15,
            borderWidth: 2,
          }}
          arrowIconColor="hotpink"
          searchIconColor="black"
          // optionsLabelStyle={{ color: "black" }}
          toggleIconColor="hotpink"
          multiOptionContainerStyle={{ backgroundColor: "hotpink" }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  headingText: {
    padding: 8,
  },
});

export default ShoppingList;
