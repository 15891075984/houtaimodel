import React from 'react'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Login from './component/login'
import Buttons from './component/button'
import NotFound from './component/notFound'
import Admin from './admin'
import App from './App'
export default class IRouter extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>(
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons"  component={Buttons}/>
                                <Route   component={NotFound}/>
                            </Switch>
                        </Admin>
                   
                    )}/>
                    <Route path="/order/detail" component={Login}/>
                </Switch>
            </BrowserRouter>
        )
    }
}