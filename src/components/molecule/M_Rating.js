import React from 'react';
import styled from 'styled-components';
import AIcon from '../atom/A_Icon';
import star from '../../assets/png-icons/Star.svg'


const MRating = ({rate}) => {

    return (
        <Div>
            {[...Array(5)].map((el,i)=><AIcon color={i+1<=rate?'green':'red'} key={i} source={star}/>)}
        </Div>
    )
}
export default MRating;

const Div = styled.div`
display: flex;

`