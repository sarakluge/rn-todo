import React from "react";
import styled from 'styled-components/native';

interface IProps {
    onPress: () => void;
    text: string;
    bgColor: string;
    borderColor: string;
}

const ButtonContainer = styled.TouchableOpacity`
    
    background-image: radial-gradient( #b490ee, #7739db);
    padding: 2px;
    border-radius: 8;
    width: 80px;
    height: 35px;
    flex-direction: column;
    justify-content: center;
    margin: 5px;
    box-shadow: 4px 4px 3px #000000;
`

const ButtonText = styled.Text`
    font-size: 15px;
    text-align: center;
    color: white
`

const Button: React.FC <IProps> = ({onPress, text, bgColor, borderColor}) => (
    
    <ButtonContainer onPress={onPress} bgColor={bgColor} borderColor={borderColor}>
        <ButtonText>{text}</ButtonText>
    </ButtonContainer>
)

export default Button;