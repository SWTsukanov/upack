import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Theme from "../../style/Theme";
import AButton from '../atom/A_Button'
import AText from "../atom/A_Text";
import MItemImages from "../molecule/M_ItemImages";
import MItemPrice from "../molecule/M_ItemPrice";

import MRating from "../molecule/M_Rating";


const OCardItem = () => {
    const [count, setCount] = useState(0);

    const handleClickCount = (e) => {
        if(e.target.innerText==='+')setCount(count+1)
        if(count<= 0)return false;
        if(e.target.innerText==='-')setCount(count-1)
        }

    return (
        <Div>
            <MItemImages />

            <DivSmall>
                <AText
                    text={'Гофрокороб 200*120*120 мм Т-23 бурый'}
                    fontSize={props => props.theme.fontSize.h5}
                    fontFamily={props => props.theme.fonts.semibold}
                />
                <DivRating>
                    <MRating rate={4} />
                </DivRating>
                <Hr />
            </DivSmall>

            <MItemPrice
                price={9.86}
                discount={6.86}
            />
            <DivAmount>
                <AText
                    text={'Количество'}
                    fontSize={props=>props.theme.fontSize.h5}
                />
                <DivAmountButtons>
                    <AButton
                        propButton={'-'}
                        propPadding={'0'}
                        click={handleClickCount}

                    />
                    <AText
                        text={count}
                    />
                    <AButton
                        propButton={'+'}
                        propPadding={'0'}
                        click={handleClickCount}
                    />
                </DivAmountButtons>
            </DivAmount>
            <button>Купить</button>
            <div>
                <p>Физические свойства title</p>
                <div>
                    <p>specName</p>
                    <p>value</p>
                </div>
            </div>
        </Div>
    )
}

export default OCardItem;

const Div = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 3px 24px rgba(0, 0, 0, 0.1);
    padding:  39px 15px 92px 15px;
`;

const DivSmall = styled.div`
    display: flex ;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const DivRating = styled.div`
    display: flex;
    height: 16px;
`;


const Hr = styled.hr`
    margin-top:28px;
    width:80%;
`;
const DivAmount = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const DivAmountButtons = styled.div`
    display: flex;
    justify-content:space-around;
    border: 1px solid ${props => props.theme.colors.secondBgGrey};
    width: 175px;
    & p{
        border-left: 1px solid ${prop => prop.theme.colors.secondBgGrey}80 ;
        border-right: 1px solid ${prop => prop.theme.colors.secondBgGrey}80 ;
        width: 51px;
        line-height: 41px;
        text-align: center;
        flex: 1;

    }
    & button{
        border:0px solid ${props => props.theme.colors.secondBgGrey}80;
        background-color: ${props => props.theme.colors.secondary};
        color:${props => props.theme.colors.main};
        border-radius: 0;
        flex: 1;
        &:hover{
            box-shadow: inset 20px -40px 20px 2px ${props => props.theme.colors.secondBgGrey}80;
        }
        &:active{
            box-shadow: inset 20px -40px 20px 2px ${props => props.theme.colors.secondBgGrey}99;

        }
    }
`