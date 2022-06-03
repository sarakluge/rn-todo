import React from "react";
import styled from 'styled-components/native';

interface IProps {
    title: string;
}


const darkPurple = "#7739db"
const lightPurple = "#d3b8ff"


const Container = styled.View`
background-image: radial-gradient( #b490ee, #7739db);
width: 100%;
height: 40px;
align-items: center;
justify-content: center
`;

const Title = styled.Text`
color: white;
font-weight: bold;
font-size: 20px;
`


const Header: React.FC<IProps> = ({ title }) => (
    
   <Container>
       <Title>{title}</Title>
   </Container> 
)  

export default Header;