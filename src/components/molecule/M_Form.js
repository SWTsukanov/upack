import React from "react";
import styled from "styled-components";
import AText from "../atom/A_Text";

const MForm = () => {
    return (
        <Div>
            <AText
                text={'Поможем подобрать индивидуальный вариант упаковки для вас'}
                fontSize={prop => prop.theme.fontSize.h3}
                fontFamily={prop => prop.theme.fonts.semibold}
            />
            <Form >
                <Label>Имя<span style={{ color: 'red' }}>*</span>
                    <Input name="userName" type={'string'} required  ></Input>
                </Label>
                <Label>Номер телефона<span style={{ color: 'red' }}>*</span>
                    <Input name="phone" type={'number'} required ></Input>
                </Label>
                <Label>E-mail<span style={{ color: 'red' }}>*</span>
                    <Input name="email" ></Input>
                </Label>
            </Form>
        </Div>
    )
}

export default MForm;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
padding: 42px 9px;
text-align: left;
`
const Input = styled.input`
width: 100%;
height: 51px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
`;

const Label = styled.label`
margin-top: 9px;
position: relative;
color:${
    prop=>prop.theme.colors.secondBgGrey
}f2
`