import React, { Component } from 'react'
import store from '../store/index'
export default class Demo1 extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        //----------关键代码-----------start
        store.subscribe(()=>{
            this.setState(store.getState())
        })
        //----------关键代码-----------end
    }
    render() {
        return (
            <div>
                <p onClick={()=>{this.sell()}}>0000</p>
                <p onClick={()=>{this.props.qwe()}}>{this.state.name}</p>
            </div>
        )
    }
    sell () {
        let action = {
            type:'aaa'
        }
        store.dispatch(action)
    }
}
