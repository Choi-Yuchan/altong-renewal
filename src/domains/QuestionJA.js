import QuestionBox from '../components/questionBox/QuestionBox';
import React, {useEffect} from 'react';
import i18n from '../config/lang/i18n';

function QuestionJA(props){

    const match = props.match;

    useEffect( () =>{
        i18n.changeLanguage('ja')
    }, [] );

    return <QuestionBox match={ match } ></QuestionBox>
}

export default QuestionJA;