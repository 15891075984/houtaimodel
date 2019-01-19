import React,{Component} from 'react'
import {Menu,Icon} from 'antd'
import menuList from '../../config/menuConfig'
import './style.less'
import logo from '../../resource/assets/logo-ant.svg'
const SubMenu = Menu.SubMenu;
export default class NavLeft extends React.Component{
    state={}
    componentWillMount(){
        console.log(menuList);
        
        let navLeftNode=this.navLeftNode(menuList)
        this.setState({
            navLeftNode
        })
    }
    navLeftNode=(data)=>{
        return data.map(item=>{
           
                if(item.children){
                return (
                    <SubMenu key={item.key} 
                            title={
                                <span>
                                <Icon type="mail" />
                                <span>{item.title}</span>
                                </span>
                            }>
                            {item.children.map(itemChildren=>{
                                return (
                                    <Menu.Item key={itemChildren.key}>{itemChildren.title}</Menu.Item>
                                )
                            })}
                    </SubMenu>)
            }else{
                return (
                    <SubMenu key={item.key} 
                            title={
                                <span>
                                <Icon type="mail" />
                                <span>{item.title}</span>
                                </span>
                            }></SubMenu>)
                
                           
            }
        })
        
    }
   render(){

       return (
           <div>
                <div className="logo">
                    <img src={logo} />
                    <h2 className="title">共享单车后台</h2>
                </div>
                <div>
                    <Menu
                     mode="inline"
                     theme="dark">
                     
                    {this.state.navLeftNode}
                    </Menu>
                </div>

           </div>
       )
   }
}