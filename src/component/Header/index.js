import React from 'react'
import './style.less'
import moment from 'moment'
import {NavLink} from 'react-router-dom'
export default class Headers extends React.Component{
    state={
        time:moment().format()
    }
    componentDidMount(){
        setInterval(()=>{
            let time=moment().format()
            this.setState({
                time
            })
        },1000)
    }
    render(){
        return (
            <div className="header">
               
                <div className="logout">
                    <div>{this.state.time}
                        <span>退出</span>
                    </div>
                        
                    </div>
            </div>
        )
    }
}