import React from "react";
import styled from 'styled-components';

const Image=styled.img`
width:${props=>props.width||'100%'};
height:${props=>props.height||'100%'};
`;

const AImage = ({source,width,height,alt}) =>{
    return(
        <Image
        width={width}
        height={height}
        src={source}
        alt={alt||'image'}
        />
            
    )
}

export default AImage;