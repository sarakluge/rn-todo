import React from "react";
import styled from 'styled-components/native';

const Wrapper = styled.View `
    background-color: #3b3b3b;
    width: 100%;
`

const StyledContainer: React.FC = (props) => (
    <Wrapper>{props.children}</Wrapper>
)

export default StyledContainer;