import React from 'react';
import styled from 'styled-components';
import AText from '../atom/A_Text';

const MDescription= () => {
    return(
        <Div>
            <DivWrapper>
            <DivTitle>
                <AText 
                text={'Наша компания'}
                fontFamily={props=>props.theme.fonts.semibold}
                fontSize={props=>props.theme.fontSize.h3}
                />
            </DivTitle>

            <DivSmall>
                <AText text={'ООО “ЮНА” - это полный цикл производства упаковки из всех видов картона.'} />
                <br/>
                <AText text={'Основная цель компании - учитывая интересы наших клиентов, обеспечить отличный сервис и качество производимой продукции.'} />
                <br/>
                <AText text={'Быстрые сроки изготовления, качество продукции, удобный сервис, обеспечивают нам большое количество заказов и довольных клиентов.'} />
            </DivSmall>
            </DivWrapper>
        </Div>
    )
}

export default MDescription;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 62px 15px; 
    margin-top: 81px;
    background-image: url(" ${require('../../assets/jpeg-images/mobile/arno-senoner-yqu6tJkSQ_k-unsplash 3.png')} ");
    background-size: cover;
`;
const DivSmall = styled.div`
    padding: 0 19px;
    text-align: center;
    margin-top: 35px;
    padding-bottom: 60px;
`;
const DivTitle = styled.div`
margin-top:56px ;
`;
const DivWrapper = styled.div`
    background-color: ${props=>props.theme.colors.secondary}F2;
`