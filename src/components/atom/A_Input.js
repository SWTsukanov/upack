import React from "react";
import styled from 'styled-components';



const AInput = ({placeholder,fontSize,colorText,required,type}) =>{
    return(
        <Input
            fontSize={fontSize}
            colorText={colorText}
            placeholder={placeholder}
            required={required||false}
            type={type}
        />
            
    )
}

export default AInput;

const Input=styled.input.attrs(props=>({
    type: props.type,
    if(required){return required}
}))`
color:${props=>props.colorText? props.colorText : props.theme.colors.main};
`;