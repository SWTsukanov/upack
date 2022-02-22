import React from "react";
import styled from "styled-components";
import bg from '../../assets/jpeg-images/mobile/bg_unique_pack.jpg'

import AButton from "../atom/A_Button";
import AText from "../atom/A_Text";

const MUniquePack = () =>{
    return(
        <Div>
            <SmallDiv>
                <DivTitle >
                <AText 
                    text={'Нужна уникальная упаковка? Разработаем её для вас!'}
                    fontSize={props=>props.theme.fontSize.h3}
                    fontFamily={props=>props.theme.fonts.semibold}
                    />
                </DivTitle>
                <DivText >
                    <AText 
                    text={'Воплощение любых конструкторских идей от простых до самых сложных упаковочных решений'}
                    />
                </DivText>
                <AButton propButton={'Подобрать упаковку'} />
            </SmallDiv>
        </Div>
    )
}

export default MUniquePack;

const Div = styled.div`
    width: 100%;
    height: 718px;
    position:relative;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 73px;
    padding:113px 15px ;
`;
const SmallDiv=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    opacity: 93%;
    width: 100%;
    height: 100%;
    background-color: ${props=>props.theme.colors.secondary};

`;
const DivTitle=styled.div`
    width: 100%;
    padding: 0 15px ;
    text-align: center;

`;
const DivText = styled.div`
    width: 100%;
    padding: 0 15px ;
    text-align: center;
`;