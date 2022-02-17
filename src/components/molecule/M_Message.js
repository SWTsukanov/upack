import React from "react";
import AText from "../atom/A_Text";
import styled from "styled-components";
import AButton from "../atom/A_Button";

const MMessage = ({ active, clicked, text }) => {



    return (
        <Div active={active}>
            <AText
                text={text}
                fontSize={props => props.theme.fontSize.h3}
            />
            <AButton click={clicked} propButton={'push'} />
        </Div>
    )
}

export default MMessage;

const Div = styled.div`
    width: 60%;
    height: 90%;
    display: ${prop => prop.active ? 'flex' : 'none'};
    justify-content:center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    background-color: ${prop => prop.theme.colors.secondary};
    box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.43);
    & button{
        width: 300px;
        height: 45px;
        text-align: center;
        margin:auto;
        position: absolute;
        bottom: 15px;
    }
`