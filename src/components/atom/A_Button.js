import React from "react";
import styled from "styled-components";

const AButton = ({propPadding,propButton,propWidth,propHeight,propColor,propBgColor,click, propBorder })=>{
    return(
    <Button
    height={propHeight}
    width={propWidth} 
    border={propBorder}
    onClick={click}
    color={propColor}
    background={propBgColor}
    padding={propPadding}
    >
        {propButton}
    </Button>)
};

export default AButton;

const Button = styled.button`
height: ${props=>props.height};
width: ${props=>props.width};
border: ${props=>props.border};
border-radius:${props=>props.border?'0':'5px'}  ;
background-color: ${props=>props.background ? props.background : props.theme.colors.mainBg};
padding: ${props=>props.padding ? props.padding : '16px 40px'};
color: ${props=>props.color ? props.color : props.theme.colors.secondary+'f2'};
font-size: ${props=>props.fontSize ? props.fontSize : props.theme.fontSize.h6};
text-align: center;
vertical-align: baseline;
`;