import React,{useState} from 'react';
import styled from 'styled-components';
import MQuestionActive from '../molecule/M_QuestionsActive';
import { activeQuestions, aboutUs } from '../../data/questions'
import AText from '../atom/A_Text';
import MAboutUs from '../molecule/M_AboutUs';


const OAboutQuestions = () => {

const [questionId,setQuestionId]=useState();

console.log(questionId)
    return (
        <Div >
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

            <DivSmall onClick={(e)=>setQuestionId(e.target.id)}>
                {activeQuestions.map((el, id) =>{return(
                <Div key={id} >    
                <Hr/>
                <MQuestionActive
                        
                        id={id + 1} /*data id attributes */
                        title={el.title}
                        dataText={el.fullText} />
                        </Div>
                        )}
                    
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
`
const Hr = styled.hr`
width:100%;
border: 1px solid ${props=>props.theme.colors.secondBgGrey};
opacity: 20%;
`