import React, { Component } from 'react'
import axios from 'axios'
export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount () {
        // console.log(this.props.match.params.id)
        axios.get('/user').then((res)=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                我是libiao,参数
            </div>
        )
    }
}
