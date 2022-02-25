import React from 'react';
import styled from 'styled-components';
import AText from '../atom/A_Text';

const MItemPrice = ({ price, discount, }) => {


    return (
        <DivPrice>
            <AText
                text={'Цена'}
                fontSize={props => props.theme.fontSize.h5}
                fontFamily={props => props.theme.fonts.semibold}
            />
            <DivPriceRow>
                <AText
                    text={`${discount}₽/шт`}
                    fontSize={props => props.theme.fontSize.h2}
                    colorText={props => props.theme.colors.mainBg}
                />
                <AText text={`${price} ₽/шт`} />
            </DivPriceRow>
        </DivPrice>
    )
}

export default MItemPrice;

const DivPrice = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 22px;
`;

const DivPriceRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;    
`;