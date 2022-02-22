import React from "react";
import styled from "styled-components";

const AText = ({
  text,
  fontSize,
  colorText,
  fontFamily,
  marginTop,
  underline,
  lineHeight }) => {
  return (
    <Text
      font={fontFamily}
      sizeFont={fontSize}
      colorText={colorText}
      marginTop={marginTop}
      underline={underline}
      lineHeight={lineHeight}
    >
      {text}
    </Text>
  );
};

export default AText;

const Text = styled.p`
  line-height: ${props=>props.lineHeight ? props.lineHeight:'147.3%'};
  font-size: ${(props) => props.sizeFont ? props.sizeFont : props.theme.fontSize.mainFont};
  font-family: ${(props) => props.font ? props.font : props.theme.fontFamily};
  margin-top: ${(props) => props.marginTop};
  color: ${(props) =>
    props.colorText ? props.colorText : props.theme.colors.main};
  text-decoration: ${props => props.underline ? 'underline' : 'none'} ;
`;
