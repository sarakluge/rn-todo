import React from "react";
import styled from 'styled-components/native';

interface IProps {
    placeholder: string;
    value: string;
    onChangeText: (text:string) => void;
}

const StyledInput = styled.TextInput`
background-color: white;
width: 60%;
height: 35px;
padding: 6px;
border-radius: 8;
border-color: #7739db;
border-style: solid;
border-width: 2px;
margin: 0 20px;

`;


const Input: React.FC<IProps> = ({ placeholder, value, onChangeText }) => {
    
    return <StyledInput value={value} placeholder={placeholder} onChangeText={onChangeText}></StyledInput>
    
}
export default Input;
