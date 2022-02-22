import React from "react";
import styled from "styled-components";
import AText from "../atom/A_Text";

const MPath = ({path,}) =>{

    return(
        <Div>
            <AText  text={'source catalog'}/>
        </Div>
    )
};

export default MPath;

const Div = styled.div`
display: flex;
flex-direction: row;
`