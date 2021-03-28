import React from 'react'
import { useSelector } from 'react-redux'
import {Route, Switch} from "react-router-dom"
import { Cities } from '../Pages/Cities/Cities'
import { City } from '../Pages/City/City'
import { Home } from '../Pages/Home/Home'
import { Login } from '../Pages/Login/Login'
import { Nav } from '../Pages/Nav/Nav'
import { Polling } from '../Pages/Polling/Polling'
import { Register } from '../Pages/Register/Register'

export const Routes = () => {

    const isAuth = useSelector((state) => state.login.isAuth)

    return (
        <div>
            {isAuth && <Route path = "/" component = {Nav}/> }
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/register" component = {Register}/>
                <Route exact path = "/login" component = {Login}/>
                <Route exact path = "/cities" component = {Cities}/>
                <Route exact path = "/city/:id" component = {City}/>
                <Route exact path = "/polling" component = {Polling}/>
            </Switch>
        </div>
    )
}

