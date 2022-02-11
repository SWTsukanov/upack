import React from "react";

import styled from "styled-components";

// components 
import MContactShort from "../molecule/M_ContactsShort";
import MInfoLinks from "../molecule/M_InfoLinks";
import AText from "../atom/A_Text";


const OMenuFooter=()=>{

    const catalog=[
        {itemId:1,title:'Гофрокороба'},
        {itemId:2,title:'Коробки по применению'},
        {itemId:3,title:'Коробки с печатью'},
        {itemId:4,title:'Коробки для подарков'}
        ];
        
    const aboutUs=[
        {itemId:1,title:'О нас'},
        {itemId:2,title:'Команда'},
        {itemId:3,title:'Доставка'},
        {itemId:4,title:'Наш сервис'},
    ]    
  

    return(
        <Div>
                    <Hr/>

            <SmallDiv >
            <MInfoLinks itemArray={ catalog.map((el)=>(el.title))}/>
            <MInfoLinks itemArray={ aboutUs.map((el)=>(el.title))}/>
            </SmallDiv>
            <MContactShort />
            <WrapperLegacy >
                <AText text={'Условия и положения'}/>
                <AText text={'Политика конфиденциальности'}/>
            </WrapperLegacy>
            
            <AText text={'Все права защищены'}/>



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

const WrapperLegacy=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: #E0E0E0;
width: 100%;
height: 130px;
margin: 166px 0 0 0;
padding: 20px 0 29px 0;
`

const Hr=styled.hr`
margin-top:46px;
width:80%;
`