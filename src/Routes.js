import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import QuestionBox from './components/questionBox/QuestionBox'
import QuestionKR from './domains/QuestionKR'

export default class Routes extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/view/questions/:question" component={QuestionBox}/>
                    <Route exact path="/view/questions/:question/kr" component={QuestionKR}/>
                </Switch>
            </Router>
        )
    }
}