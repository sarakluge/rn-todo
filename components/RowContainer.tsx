import React from "react";
import styled from 'styled-components/native';

const Container = styled.View `
    flex-direction: row;
    height: 50px;
    width: 100%;
    align-items: center;
`

const RowContainer: React.FC = (props) => (
    <Container>{props.children}</Container>
)

export default RowContainer;