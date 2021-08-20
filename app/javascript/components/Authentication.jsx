import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';

import Dashboard from './Dashboard'; 
import Home from './Home';

export default class Authentication extends Component {
    constructor() {
        super();

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        };

        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        
    }

    checkLoginStatus() {
        axios.get("http://localhost:3000/logged_in", { withCredentials: true })
        .then(response => {
            if(
                response.data.logged_in &&
                this.state.loggedInStatus === "NOT_LOGGED_IN"
                ){
                    this.setState({
                        loggedInStatus: "LOGGED_IN",
                        user: response.data.user
                    })
                } else if (
                !response.data.logged_in && 
                this.state.loggedInStatus === "LOGGED_IN"
                ) {
                    this.setState({
                        loggedInStatus: "NOT_LOGGED_IN",
                        user: {}
                    })
                } 
        }).catch(error => {
            console.log("check loging error", error)
        })
    }

    componentDidMount() {
        this.checkLoginStatus()
    }

    handleLogin(data) {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: data.user
        })
    }

    handleLogout(){
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user:{}
        })
    }

    render() {
        return (
                <div className="main">
                    <BrowserRouter>
                        <Switch>
                            <Route
                                exact 
                                path={"/"} 
                                render={props => (
                                    <Home 
                                        {...props} 
                                        handleLogin={this.handleLogin} 
                                        handleLogout={this.handleLogout}
                                        loggedInStatus={this.state.loggedInStatus}
                                    />
                                )}
                            />
                            <Route 
                                exact 
                                path={"/dashboard"}
                                    render={props => (
                                        <Dashboard
                                            {...props}
                                            loggedInStatus={this.state.loggedInStatus} 
                                        /> 
                                    )} 
                            />
                        </Switch>
                    </BrowserRouter>
                </div>
            
        )
    }
}