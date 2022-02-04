import React from "react";
import styled from 'styled-components';

const Icon=styled.img`
width:${props=>props.width||'100%'};
height:${props=>props.height||'100%'};


`;

const AIcon = ({source,width,height,color,iconSrc}) =>{
    return(
        <Icon
        width={width}
        height={height}
        src={source}
        color={color}
        src={iconSrc}
        />
            
    )
}

export default AIcon;