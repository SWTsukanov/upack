import React from "react";
import styled from 'styled-components';



const AImage = ({propId,source,width,height,alt}) =>{
    return(
        <Image
        id={propId}
        width={width}
        height={height}
        src={source}
        alt={alt||'image'}
        />
            
    )
}

export default AImage;

const Image=styled.img`
width:${props=>props.width||'100%'};
height:${props=>props.height||'100%'};
border: 1px solid red;
`; 