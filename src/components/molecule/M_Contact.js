import React from "react";
import styled from "styled-components";
import AText from "../atom/A_Text";

const MContact = ({ title, textMain,textSecond }) => {
  return (
    <Div>
      <AText
        fontFamily={props=>props.theme.fonts.semibold}
        fontSize={props=>props.theme.fontSize.h4}
        text={title}
      />
      <AText text={textMain} />
      <AText text={textSecond} />

    </Div>
  );
};

export default MContact;

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
