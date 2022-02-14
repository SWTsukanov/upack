import React from "react";

import styled from "styled-components";

import MContactShort from "../molecule/M_ContactsShort";
import MInfoLinks from "../molecule/M_InfoLinks";
import AText from "../atom/A_Text";

import { catalog, aboutUs } from "../../data/menuFooter";

const OMenuFooter = () => {




    return (
        <Div>
            <Hr />

            <SmallDiv >
                <MInfoLinks itemArray={catalog.map((el) => (el.title))} />
                <MInfoLinks itemArray={aboutUs.map((el) => (el.title))} />
            </SmallDiv>
            <MContactShort />
            <WrapperLegacy >
                <AText text={'Условия и положения'} />
                <AText text={'Политика конфиденциальности'} />
            </WrapperLegacy>

            <AText text={'Все права защищены'} />



        </Div>
    )
}

export default OMenuFooter;

const Div = styled.div`
/* padding: 15px; */
width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow:hidden;
  text-align:center;
  align-items:center;
`;

const SmallDiv = styled.div`
width:100%;
display: flex;
justify-content: space-between;
text-align:left;
padding: 0 15px;
margin-top:29px;
`;

const WrapperLegacy = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: #E0E0E0;
width: 100%;
height: 130px;
margin: 166px 0 0 0;
padding: 20px 0 29px 0;
`

const Hr = styled.hr`
margin-top:46px;
width:80%;
`