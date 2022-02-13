import React from "react";
import styled from "styled-components";
import AText from "../atom/A_Text";

const MInfoLinks = ({ itemArray }) => {
  return (
    <Div>
      {/* title  */}
      <AText
        text={"Каталог"}
        fontFamily={"SF Pro Display Semibold"}  
        fontSize={props=>props.theme.fontSize.h4}
        colorText={props=>props.theme.colors.secondBgGrey}
      />

      {/* Links  */}
      <SmallDiv>
        {itemArray.map((el, id) => {
          return <AText key={id} text={el} marginTop={'10px'} />;
        })}
      </SmallDiv>
    </Div>
  );
};

export default MInfoLinks;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const SmallDiv = styled.div`
  margin-top: 37px;
`;
