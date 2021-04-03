import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import QuestionBox from './components/questionBox/QuestionBox'

export default class Routes extends React.Component{
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/view/questions/:questions" component={QuestionBox}/>
                </Switch>
            </Router>
        )
    }
}