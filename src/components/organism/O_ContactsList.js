import React from "react";
import styled from "styled-components";

import map from "../../assets/jpeg-images/mobile/map.jpg";

import AText from "../atom/A_Text";
import AImage from "../atom/A_Img";
import MContact from "../molecule/M_Contact";

import { contacts } from "../../data/contacts";

const OContactsList = () => {


  return (
    <Div>
      <AText
        text={"Местоположение и контакты"}
        fontFamily={props=>props.theme.fonts.semibold}
        fontSize={props=>props.theme.fontSize.h3}
      />
      <AImage width={"330px"} source={map} />

      {contacts.map((el, id) => (
        <DivSmall key={id}>
          <MContact           
            title={el.title}
            textMain={el.main}
            textSecond={el.second}
          />
        </DivSmall>
      ))}
    </Div>
  );
};
export default OContactsList;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top:78px;
`;
const DivSmall = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:20px;
`;
