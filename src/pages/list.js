import React, { Component } from 'react'
import axios from 'axios'
import '../components/css.css'
import { Route } from 'react-router-dom';
export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount () {
        // console.log(this.props.match.params.id)
        axios.post('/user').then((res)=>{
            console.log(res)
        })
    }
    render() {
        console.log(this.props.routes)
        return (
            <div className="a">
                {
                    this.props.routes.map((item,index)=>{
                        return <Route key={index} exact path={item.path} component={item.component} />
                    })
                }
            </div>
        )
    }
}
