import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routers from './route';
console.log(routers)
export default class componentName extends Component {
    render() {
        return (
            <Router>
                {/* <ul>
                    <li>
                        <Link to="/">shoye</Link>
                    </li>
                    <li>
                        <Link to="/list/123">list</Link>
                    </li>
                </ul> */}
                {
                    routers.map((item,index) => {
                        if (item.exact) {
                            return <Route key = {index} path = {item.path} exact render = {(props)=>(
                                <item.component {...props} routes = {item.childrens}/>
                            )}/>
                        } else {
                            return <Route key = {index} path = {item.path} render = {(props)=>(
                                <item.component {...props} routes = {item.childrens}/>
                            )}/>
                        }
                    })
                }
            </Router>
        )
    }
}
