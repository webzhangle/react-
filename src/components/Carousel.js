import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
export default class CarouselComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 194,
        }
    }
    componentDidMount() {
        this.setState({
          data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
    }
    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                {this.state.data.map(val => (
                    <a
                    key={val}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        alt=""
                        style={{ height: '100%' }}
                    
                    />
                    </a>
                ))}
                </Carousel>
            </WingBlank>
        )
    }
}
