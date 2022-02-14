import React from "react";
import styled from "styled-components";

const AText = ({ text, fontSize, colorText, fontFamily, marginTop }) => {
  return (
    <Text
      font={fontFamily}
      sizeFont={fontSize}
      colorText={colorText}
      marginTop={marginTop}
    >
      {text}
    </Text>
  );
};

export default AText;

const Text = styled.p`
  font-size: ${(props) => props.sizeFont ? props.sizeFont : props.theme.fontSize.mainFont};
  font-family: ${(props) => props.font};
  margin-top: ${(props) => props.marginTop};
  color: ${(props) =>
    props.colorText ? props.colorText : props.theme.colors.main};
`;
