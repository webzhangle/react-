import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './../pages/index';
import List from './../pages/list';
export default class componentName extends Component {
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to="/">shoye</Link>
                    </li>
                    <li>
                        <Link to="/list/123">list</Link>
                    </li>
                </ul>
                <Route path="/" exact component = {Index} /> {/*首页精确匹配*/}
                <Route path="/list/:id" component = {List} />
            </Router>
        )
    }
}
