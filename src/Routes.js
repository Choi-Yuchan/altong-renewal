import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import QuestionBox from './components/questionBox/QuestionBox'
import QuestionKR from './domains/QuestionKR'
import QuestionEN from './domains/QuestionEN'
import QuestionJA from './domains/QuestionJA'
import QuestionZH from './domains/QuestionZH'

export default class Routes extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/view/questions/:question" component={QuestionBox}/>
                    <Route exact path="/view/questions/:question/ko" component={QuestionKR}/>
                    <Route exact path="/view/questions/:question/en" component={QuestionEN}/>
                    <Route exact path="/view/questions/:question/ja" component={QuestionJA}/>
                    <Route exact path="/view/questions/:question/zh" component={QuestionZH}/>
                </Switch>
            </Router>
        )
    }
}