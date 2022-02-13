import React from 'react';
import styled from 'styled-components';
import MQuestionActive from '../molecule/M_QuestionsActive';
import {activeQuestions} from '../../data/questions'


const OAboutQuestions = () => {

    return(
        <Div >

            {activeQuestions.map((el,id)=><MQuestionActive key={id} id={id+1} title={el.title} dataText={el.fullText} />) }

        </Div>
    )
}

export default OAboutQuestions;

const Div = styled.div`
    display: flex;
    flex-direction: column;
`