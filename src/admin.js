import React,{Component} from 'react'
import {Row,Col} from 'antd'

import NavLeft from './component/NavLeft'
import  Headers from './component/Header'
import  Footer from './component/Footer'
import './common.less'
export default class Admin extends React.Component{
    render(){
        return (
            <Row className="container">
                <Col span={3} className="nav-left">
                    <NavLeft ></NavLeft>                  
                </Col>
                <Col span={21} className="main">
                    <Headers/>
                    <Row className="content">
                        content
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        )
    }
}