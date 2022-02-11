import React from "react";
import styled from "styled-components";



const AText = ({ text, fontSize, colorText, fontFamily,marginTop }) => {
  return (
    <Text
      fontFamily={fontFamily}
      fontSize={fontSize}
      colorText={colorText}/*colorText={'var(--main-bg)'}*/
      marginTop={marginTop} 
    >
      {text}
    </Text>
  );
};

export default AText;


const Text = styled.p`
  font-size: ${(props) => props.fontSize || "var(--main-font)"};
  font-family: ${(props) => props.fontFamily};


  margin-top: ${(props) => props.marginTop};

  color: ${(props) => props.colorText || "var(--main-color)"};
`;