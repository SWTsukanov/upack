import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arroawLink from '../../assets/png-icons/arrow.png'
import { catalogLinks } from "../../data/catalogLinks";

import AIcon from "../atom/A_Icon";
import AText from "../atom/A_Text";
import MCatalogItem from "../molecule/M_CatalogItem";



const OProductList = () => {



    return (
        <Div>
            <DivText>
                <AText text={'Сделаем коробки которые вам нужны'}
                    fontFamily={props => props.theme.fonts.semibold}
                    fontSize={props => props.theme.fontSize.h3}
                />
            </DivText>

            <SmallDiv>
                {catalogLinks.map((el, id) =>
                    <MCatalogItem
                        key={id}
                        catalogLink={el.link}
                        propImg={el.img}
                        propText={el.title}
                    />
                )}

            </SmallDiv>

            <DivLink>
                <Link to={'/catalog'}>
                    <AText text={'Перейти в каталог'}
                        fontFamily={props => props.theme.fonts.semibold}
                        underline='true'
                    />
                </Link>
                <AIcon
                    width={'15px'}
                    source={arroawLink}
                />
            </DivLink>

        </Div>
    )
}

export default OProductList;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    margin-top: 67px;
`;

const DivText = styled.div`
    padding:0 9px;
    margin-bottom: 43px;
`;

const SmallDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const DivLink = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    & img{
        margin-left: 9px;
    }
`;
