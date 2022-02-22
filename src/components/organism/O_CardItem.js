import React from "react";
import styled from "styled-components";
import AImage from "../atom/A_Img";
import AText from "../atom/A_Text";

const OCardItem = () => {
    return (
        <Div>
            <AImage />
            <p>block-row of images</p>
            <DivSmall>
                <AText text={'title name'} />
                <AText text={'properties'} />
            </DivSmall>
            <p>rating</p>
            <div>
                <p>цена</p>
                <p>block price</p>
            </div>
            <div>
                <p>количество</p>
                <div>
                    <button>-</button>
                    <p>10</p>
                    <button>+</button>
                </div>
            </div>
            <button>Купить</button>
            <div>
                <p>Физические свойства title</p>
                <div>
                    <p>specName</p>
                    <p>value</p>
                </div>
            </div>
        </Div>
    )
}

export default OCardItem;

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;

padding: 15px 0;

`;

const DivSmall = styled.div`
display: flex ;
`