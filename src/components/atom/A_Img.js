import React from "react";
import styled from 'styled-components';

const Image=styled.img`
width:${props=>props.width||'100%'};
height:${props=>props.height||'100%'};
`;

const AImage = ({source,width,height}) =>{
    return(
        <Image
        width={width}
        height={height}
        src={source}
        />
            
    )
}

export default AImage;