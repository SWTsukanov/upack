import React, { useState } from 'react';
import styled from 'styled-components';
import dog from '../../assets/jpeg-images/mobile/dog.jpg'
import { activeQuestions, aboutUs } from '../../data/questions'

import MQuestionActive from '../molecule/M_QuestionsActive';
import AText from '../atom/A_Text';
import MAboutUs from '../molecule/M_AboutUs';
import AImage from '../atom/A_Img';


const OAboutQuestions = () => {

    const [questionId, setQuestionId] = useState(false);


    const handleClick = (e) => {
        if (questionId === e.target.id) { setQuestionId(false) }
        else { setQuestionId(e.target.id) }
    };

    return (
        <Div >
            <DivImg>
                <AImage
                    source={dog}
                />
            </DivImg>
            <DivTitle>
                <AText
                    text={'Почему именно мы?'}
                    fontSize={props => props.theme.fontSize.h3}
                    fontFamily={props => props.theme.fonts.semibold}
                />
            </DivTitle>
            {aboutUs.map((el, id) => <MAboutUs
                key={id}
                propNumber={el.id}
                propTitle={el.title}
                propText={el.fullText}
            />)}

            <DivTitle>
                <AText
                    text={'Ответим на ваши вопросы'}
                    fontSize={props => props.theme.fontSize.h3}
                    fontFamily={props => props.theme.fonts.semibold}
                />
            </DivTitle>

            <DivSmall onClick={handleClick}>
                {activeQuestions.map((el, id) => {
                    return (

                        (<MQuestionActive
                            key={id}
                            id={id.toString()} /*data id attributes */
                            title={el.title}
                            dataText={el.fullText}
                            componentId={(questionId === id.toString()) && true}
                        />)

                    )
                }

                )}
            </DivSmall>
        </Div>
    )
}

export default OAboutQuestions;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const DivSmall = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    box-shadow: 1px 0px 23px 0px rgba(0,0,0,0.1);
    margin: 15px;
`;
const DivTitle = styled.div`
    width:100%;
    text-align: center;
    margin-top: 68px;
    margin-bottom: 20px;
`;
const DivImg = styled.div`
width: 100%;
padding: 0 15px;
margin-top: 63px;
`
