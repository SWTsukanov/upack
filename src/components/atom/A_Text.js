import React from "react";
import styled from 'styled-components';

const Text=styled.p`
font-size:${props=>props.fontSize||'24px'};
color:${props=>props.colorText||'black'};
font: bold;
`;

const AText = ({text,fontSize,colorText}) =>{


    return(
        <Text
            fontSize={fontSize}
            colorText={colorText}/*colorText={'var(--main-bg)'}*/
        >
            {text}
        </Text>
    )
}

export default AText;