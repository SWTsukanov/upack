import React from "react";
import styled from "styled-components";

import AText from "../atom/A_Text";

const MAboutUs = ({propNumber, propTitle, propText}) => {

    return (
        <Div>

            <DivSmall>
                <AText 
                text={propNumber} 
                colorText={(props) => props.theme.colors.mainBg} 
                />
                <AText 
                text={propTitle} />
            </DivSmall>
            <DivText>
                <AText 
                text={propText} />
            </DivText>

        </Div>

    )
}

export default MAboutUs;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 27px 15px 0 15px;
`;
const DivSmall = styled.div`
    display: flex;
    flex-direction: row;
        & :first-child{    
        margin-right: 15px;
        };
        & :nth-child(1n){
        font-family: ${props => props.theme.fonts.semibold};
     };
`;
const DivText = styled.div`
    display: flex;
    text-align:center;
    margin-top: 14px;
`
