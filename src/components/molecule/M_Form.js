import React, { useState } from "react";
import styled from "styled-components";
import AButton from "../atom/A_Button";
import AText from "../atom/A_Text";
import MMessage from "./M_Message";


const MForm = () => {    
    const initialState = {
        userName: '',
        phone: '',
        email: ''
    }
    const [state, setState] = useState({...initialState});

    const [active, setActive] = useState('');
    const [showMessage,setShowMessage] = useState(false);


    const changeActive = (e) => {
        setActive(e.target.name);
    };

    const click = () => {
        setShowMessage(false);
    };

    const handleSubmit =(e) =>{
        console.log('info from this form', state)
        e.preventDefault();  
        setShowMessage(true);
        setState({...initialState});
        e.target.reset()

    }
    


    const SpanSymbol = <span style={{ color: 'red' }}>*</span>;

    return (
        <Div>
            <AText
                text={'Поможем подобрать индивидуальный вариант упаковки для вас'}
                fontSize={prop => prop.theme.fontSize.h3}
                fontFamily={prop => prop.theme.fonts.semibold}
            />
            <Form onSubmit={handleSubmit} >
                

                <Label forHtml='userName'>
                    {!state.userName && active !== 'userName' ? 'Имя' : ''}
                    {!state.userName && active !== 'userName' ? SpanSymbol : ''}
                    <Input 
                        onClick={changeActive}
                        onBlurCapture={()=>setActive('')}
                        onChange={(e)=>{setState({...state,userName:e.target.value})}} 
                        name="userName" 
                        type={'string'} 
                        required  ></Input>
                </Label>
                <Label forHtml='phone'>
                    {!state.phone && active !== 'phone' ? 'Номер телефона' : ''}
                    {!state.phone && active !== 'phone' ? SpanSymbol : ''}
                    <Input 
                        onClick={changeActive}
                        onBlurCapture={()=>setActive('')}
                        onChange={(e)=>{setState(state=>state,(state.phone=e.target.value))}} 
                        name="phone" 
                        type={'tel'} 
                        required ></Input>
                </Label>
                <Label forHtml='email'>
                    {!state.phone && active !== 'email' ? 'E-mail' : ''}
                    <Input onClick={changeActive}
                           onBlurCapture={()=>setActive('')}
                           onChange={(e)=>{setState(state=>state,(state.email=e.target.value))}} 
                     name="email" ></Input>
                </Label>
                <AButton propButton={'Отправить'} />
            </Form>
            <MMessage

                clicked = {click}
                active = {showMessage}
                text = {'Cпасибо, наш специалист свяжется с вами '} />
        </Div>
    )
}

export default MForm;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 49px;
    position: relative;
    & button{
        margin-top: 9px;
    }

`;

const Form = styled.form`
    width: 330px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 42px 9px;
    text-align: left;
    
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid ${prop => prop.theme.colors.secondBgGrey}99;
    border-radius: 5px;
    z-index: -1;
    padding-left: 15px;
    font-size: ${prop=>prop.theme.fontSize.mainFont};
`;

const Label = styled.label`
    height: 51px;
    margin-top: 15px;
    padding:9px;
    position: relative;
    border-radius: 5px;
    color:${prop => prop.theme.colors.secondBgGrey
    }f2;
`