import React from 'react';
import styled from 'styled-components';
import AImage from '../atom/A_Img';

import img from '../../assets/jpeg-images/mobile/gofrokorobo_400x300x300_410_300_5_80 1.png'

const MItemImages = () => {

    const handleClick = (e) =>{
       console.log(e.target)
    }


    return (
        <Div>
            <AImage source={img} />

            <DivSmall onClick={handleClick}>
                <AImage propId={1} source={img} />
                <AImage id={2} source={img} />
                <AImage id={3} source={img} />
                <AImage id={4} source={img} />
            </DivSmall>
        </Div>
    )
}

export default MItemImages;

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0 23px ;
padding-top: 22px;
overflow: hidden;

& img{
    max-width:80vw;
    border: 1px solid ${props => props.theme.colors.secondBgGrey}1A;
}
`
const DivSmall = styled.div`
width: 100%;
display:flex;
justify-content: space-between;
overflow: hidden;
padding:  16px 0 29px 0;
& img {
    max-height: 87px;
    width: 61px;
}
`