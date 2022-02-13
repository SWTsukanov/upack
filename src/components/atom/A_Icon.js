import React from "react";
import styled from 'styled-components';



const AIcon = ({source,width,height,color,alt,isActive}) =>{
    return(
        <Icon
        width={width}
        height={height}
        src={source}
        color={color}
        alt={alt}
        active={isActive}
        />
            
    )
}

export default AIcon;


const Icon=styled.img`
width:${props=>props.width||'100%'};
height:${props=>props.height||'100%'};
transform: ${props=>props.active?`rotate(90deg)`:'0'};

`;