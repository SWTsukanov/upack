import React from "react";
import AIcon from "../atom/A_Icon";
import AText from "../atom/A_Text";

import  logo from '../../assets/png-icons/logo_upack.png'
import styled from "styled-components";

const Div=styled.div`
    display: flex;
    align-items:center;
    
`
const DivSmall=styled.div`
display: flex;
flex-direction:column;
margin-left:-5px;
background-color:white;
`


const MLogo=()=>{

    return(
        <Div>
            <AIcon width={'72px'} height={'73px'} source={logo}/>
            <DivSmall>
            <AText text={'Ю-Упак'} />
            <AText fontSize={'12px'} text={'Картонная упаковка'}/>
            </DivSmall>
        </Div>
    )
}

export default MLogo;