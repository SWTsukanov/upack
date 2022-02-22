import React from "react";
import styled from "styled-components";
import AText from "../atom/A_Text";

const MCatalogItem = ({propText, propImg}) =>{

    return(
        <Div propImg={propImg}>
             <SmallDiv>
                 <AText 
                 text={propText}
                 colorText={props=>props.theme.colors.secondary} 
                 fontSize={props=>props.theme.fontSize.h3} 
                 lineHeight={1}               
                 />
             </SmallDiv>
        </Div>
    )
}

export default MCatalogItem;

const Div = styled.div`
display: flex;
flex-direction: column;
width: 270px;
height: 277px;
background-image: url("${props=>props.propImg}");
position: relative;
overflow: hidden;

:nth-child(1n+2){
    margin-top: 54px;
}
`;

const SmallDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 20%;
position: absolute;
bottom: 0;
background-color: ${props=>props.theme.colors.secondBgGrey}F2;
transition: all 200ms ease-in-out;
:hover{
    background-color: ${props=>props.theme.colors.secondBgGrey};
}

`