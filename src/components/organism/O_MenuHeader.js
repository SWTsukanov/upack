import React from "react";
import AIcon from "../atom/A_Icon";
import MLogo from "../molecule/M_Logo";
// sources
import menu from "../../assets/png-icons/menu.png";
import search from "../../assets/png-icons/search.png";
import styled from "styled-components";

const Div = styled.div`
  width: 100vw;
  height: 73px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-top:6px;
  padding:0 6px;
`;
const OMenuHeader = () => {

  return (
    <Div>
      <AIcon height={'17px'} width={'25px'} source={menu} alt={'Icon hamburger-menu'} />
      <MLogo />
      <AIcon height={'22px'} width={'23px'} source={search} />
    </Div>
  );
};

export default OMenuHeader;
