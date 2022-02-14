import React from 'react';
import styled from 'styled-components';
import MQuestionActive from '../molecule/M_QuestionsActive';
import { activeQuestions } from '../../data/questions'


const OAboutQuestions = () => {

    return (
        <Div >

            <DivSmall>
                {activeQuestions.map((el, id) =>{ return( <MQuestionActive key={id} id={id + 1} title={el.title} dataText={el.fullText} />)})}
            </DivSmall>
        </Div>
    )
}

export default OAboutQuestions;

const Div = styled.div`
    display: flex;
    flex-direction: column;
`;
const DivSmall = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    box-shadow: 1px 0px 23px 0px rgba(0,0,0,0.1);
    margin: 15px;

`