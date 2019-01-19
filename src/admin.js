import React,{Component} from 'react'
import {Row,Col} from 'antd'

import NavLeft from './component/NavLeft'
import  Headers from './component/Header'
import  Footer from './component/Footer'
import './common.less'
export default class Admin extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return (
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft ></NavLeft>                  
                </Col>
                <Col span={20} className="main">
                    <Headers/>
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        )
    }
}