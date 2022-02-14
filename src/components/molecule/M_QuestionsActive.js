import React from "react";
import styled from "styled-components";
import AIcon from "../atom/A_Icon";
import AText from "../atom/A_Text";

import braces from "../../assets/png-icons/icon_1.png";
import { useState } from "react";

const MQuestionActive = ({ dataText, title, id }) => {

  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state)
  }


  return (
    <Div onClick={handleClick} >

      <DivEvent id={id} />

      <DivTitle>

        <DivIcon>
          <AIcon isActive={state} source={braces} width={"10px"} height={"15px"} />
        </DivIcon>

        <DivTitleText>
          <AText
            text={title}
            fontSize={(props) => props.theme.fontSize.h4}
            fontFamily={(props) => props.theme.fonts.semibold}
          />
        </DivTitleText>

      </DivTitle>


      <DivSmall isActive={state}>
        <AText text={dataText} />
      </DivSmall>

    </Div>
  );
};

export default MQuestionActive;

const Div = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 15px;
  margin-top: 27px;
  position: relative;
`;
const DivSmall = styled.div`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  margin-top: 14px;
`;

const DivTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 30px;
`;
const DivIcon = styled.div`
  width: 50px;
`;
const DivTitleText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const DivEvent = styled.div`
position: absolute;
width:100%;
height:100%;
background: transparent;
`
