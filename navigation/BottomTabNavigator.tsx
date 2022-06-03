import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { NavigationContainer } from "@react-navigation/native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createAppContainer } from "react-navigation";

import TodoListScreen from "../screens/TodoList";
import ShoppingListScreen from "../screens/ShoppingList";

const BottomTabNavigator = createBottomTabNavigator(
    { 
        todo: {
            screen: TodoListScreen,
            navigationOptions: {
                tabBarIcon: ({focused, tintColor}) => {
                    return <MaterialCommunityIcons name="format-list-checkbox" size={25} focused={focused}/>;
                },
            },
        },
          
        shopping: {
            screen: ShoppingListScreen,
            navigationOptions: {
                tabBarIcon: (tabInfo) => {
                    return <MaterialCommunityIcons name="cart-outline" size={25} color="gray"/>;
                },
            },
        },
        
    }
);

export default createAppContainer(BottomTabNavigator);