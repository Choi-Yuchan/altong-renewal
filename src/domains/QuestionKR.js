import QuestionBox from '../components/questionBox/QuestionBox';
import React, {useEffect} from 'react';
import i18n from '../config/lang/i18n';

function QuestionKR(props){

    const match = props.match;

    useEffect( () =>{
        i18n.changeLanguage('ko')
    }, [] );

    return <QuestionBox match={ match } ></QuestionBox>
}

export default QuestionKR;