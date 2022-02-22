import React from "react";
import styled from "styled-components";

const AButton = ({propButton,propColor,propBgColor,click })=>{
    return(
    <Button 
    onClick={click}
    color={propColor}
    background={propBgColor}
    >
        {propButton}
    </Button>)
};

export default AButton;

const Button = styled.button`
border-radius: 5px ;
background-color: ${props=>props.background ? props.background : props.theme.colors.mainBg};
padding: ${props=>props.padding ? props.padding : '16px 40px'};
color: ${props=>props.color ? props.color : props.theme.colors.secondary+'f2'};
font-size: ${props=>props.fontSize ? props.fontSize : props.theme.fontSize.h6};
`;