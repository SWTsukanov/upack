import React from "react";
import styled from 'styled-components';

const Icon=styled.img`
width:${props=>props.width||'20px'};
height:${props=>props.height||'5px'};


`;

const AIcon = ({source,width,height,color,alt}) =>{
    return(
        <Icon
        width={width}
        height={height}
        src={source}
        color={color}
        alt={alt}
        />
            
    )
}

export default AIcon;