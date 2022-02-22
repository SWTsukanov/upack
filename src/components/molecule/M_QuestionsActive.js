import React from "react";
import styled from "styled-components";
import AIcon from "../atom/A_Icon";
import AText from "../atom/A_Text";

import braces from "../../assets/png-icons/icon_1.png";

const MQuestionActive = ({ dataText, title, id, componentId }) => {
// custom hooks, listener outside 
  return (
    <Div >
      <DivEvent id={id} />      

      <DivTitle>

        <DivIcon>
          <AIcon 
          isActive={componentId} 
          source={braces} 
          width={"10px"} 
          height={"15px"} 
          />
        </DivIcon>

        <DivTitleText>
          <AText
            text={title}
            fontSize={(props) => props.theme.fontSize.h4}
            fontFamily={(props) => props.theme.fonts.semibold}
          />
        </DivTitleText>

      </DivTitle>


      <DivSmall isActive={componentId}>
        <AText 
        text={dataText}
        colorText={props=>props.theme.colors.secondBgGrey}
        />
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
  padding:  15px 0 15px 9px;
  position: relative;
  border-top: 1px solid ${props=>props.theme.colors.secondBgGrey}50  ;
`;
const DivSmall = styled.div`
  display: ${(props) => (props.isActive ? "flex" : "none")};
  font-size: ${props=>props.theme.fontSize.h6};
  /* margin-top: 14px; */
  margin: 14px 9px 0 69px;
  text-align: left;
`;

const DivTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 30px;
  text-align: left;
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
// const Hr = styled.hr`
// width:100%;
// border: 1px solid ${props=>props.theme.colors.secondBgGrey};
// opacity: 20%;
// margin-top: 9px;
// `