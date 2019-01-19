import React from 'react'
import './style.less'
import logo from '../../resource/assets/logo-ant.svg'
export default class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <div>
                    <span>共享单车</span>
                    <span >
                        <img src={logo} className="logos"/>
                    </span>
                    <span>antd 组件库开发</span>
                </div>
                <div>
                    Copyright  2018 随遇而安出品
                </div>
                
            </div>
        )
    }
}