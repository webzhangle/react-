import React, { Component } from 'react';
import Header from '../components/header';
import Carousel from '../components/Carousel'
import { Button } from 'antd-mobile';
export default class Index extends Component {
    constructor (props) {
        super(props)
        
    }
      componentDidMount() {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
      }
      render() {
        return (
            <div>
                <Header />
                <Carousel/>
                <Button type="primary" onClick={}>primary</Button>
            </div>
          
        );
      }
    
}
