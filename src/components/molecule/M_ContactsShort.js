import React from "react";
import styled from "styled-components";
import AText from "../atom/A_Text";

const MContactShort = () => {
  return (
    <Div>
      <AText
        fontFamily={'SF Pro Display Semibold'}
        fontSize={"var(--font-h4)"}
        text={"Адрес и контакты"}
        colorText={"var(--second-grey-bg)"}
      />
      <DivSmall>
        <AText
         text={"korobka@gmail.com"} 
         marginTop={'10px'}

         />
        <AText
         text={"korobka@help.ru"} 
         marginTop={'10px'}
         />
      </DivSmall>
      <DivSmall>
        <AText 
        fontSize={"var(--font-h6)"} 
        text={"+7 (983) 456-56-65"}
        marginTop={'10px'}

         />
        <AText 
        fontSize={"var(--font-h6)"} 
        text={"+7 (983) 456-56-65"} 
        marginTop={'10px'}

        />
      </DivSmall>
    </Div>
  );
};

export default MContactShort;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align:center;
  margin-top: 37px;

`;
const DivSmall = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
