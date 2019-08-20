import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
export default class componentName extends Component {
    render() {
        return (
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                // rightContent={[
                // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                // <Icon key="1" type="ellipsis" />,
                // ]}
                >NavBar</NavBar>
        )
    }
}
