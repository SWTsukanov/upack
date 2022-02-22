import React from "react";
import styled from "styled-components";
import MPath from "../molecule/M_Path";
import OCardItem from "../organism/O_CardItem";
import OMenuFooter from "../organism/O_MenuFooter";
import OMenuHeader from "../organism/O_MenuHeader";

const Item = () => {

    return(
        <div>
           <OMenuHeader />
           <Hr />
           <OCardItem />

           <MPath />

           <OMenuFooter />
        </div>
    )
}
export default Item;

const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Hr = styled.hr`
margin-top:46px;
width:100%;
`