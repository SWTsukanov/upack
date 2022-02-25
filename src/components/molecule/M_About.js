import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AButton from '../atom/A_Button';
import AText from '../atom/A_Text';

const MAbout = () => {

    return(
        <Div>
            <DivWrapper>
                <AText
                    text={'Ю-Упак - это полный цикл производства упаковки из всех видов картона'}
                    fontFamily={props=>props.theme.fonts.semibold}
                    fontSize = {props=>props.theme.fontSize.h1}
                    lineHeight = {'120%'}
                />
                
               <Link to={'/catalog'}> <AButton propButton={'Подобрать упаковку'} /></Link>
            </DivWrapper>
        </Div>
    )
};

export default MAbout;

const Div = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding: 43px 15px;
background-image: url(" ${require('../../assets/jpeg-images/mobile/arno-senoner-yqu6tJkSQ_k-unsplash 3.png')} ");
background-size: cover;
`;

const DivWrapper = styled.div`
    background-color: ${props=>props.theme.colors.secondary}99;
    padding: 61px 16px 93px 16px;

    & :nth-child(2){
        margin-top: 42px;
    }
`;