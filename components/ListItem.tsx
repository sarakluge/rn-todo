import React from "react";
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IProps {
    todoText: string;
    onDelete: () => void;
    onCheck: () => void;
    isDone: boolean;
}

const Container = styled.View `
    flex-direction: row;
    height: 40px;
    width: 100%;
    align-items: center;
    background-color: #d3b8ff;
    justify-content: space-between;
    margin-bottom: 2px;
`
const TodoText = styled.Text `
    color: black;
    padding-left: 5px;
`

const LeftItems = styled.View`
    flex-direction: row;
    align-items: center;
`

const RightItems = styled.View`
    flex-direction: row;
    align-items: center;
`


const DeleteIcon = styled.TouchableOpacity`
    color: #7739db;
    padding-right: 10;
`
const CheckBox = styled.TouchableOpacity`
    background-color: #d3b8ff;
    padding-left: 10;
    border-radius: 50;
`

const ListItem: React.FC <IProps> = ({todoText, onDelete, isDone, onCheck}) => (
    <Container>
        <LeftItems>
            <CheckBox onPress={onCheck}>
                <MaterialCommunityIcons 
                    name={isDone ? 'check-circle-outline' : 'checkbox-blank-circle-outline'}
                    color={isDone ? '#88f8bd' : '#7739db'}
                    size={25}
                />
            </CheckBox>
            <TodoText>{todoText}</TodoText>
        </LeftItems>
        <RightItems>   
            <DeleteIcon onPress={onDelete}>
                <MaterialCommunityIcons 
                    name='delete-outline'
                    color='#7739db'
                    size={25}
                />
            </DeleteIcon>
        </RightItems>
    </Container>
)

export default ListItem;
