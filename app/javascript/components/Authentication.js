import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from './Dashboard'; 
import Home from './Home';

export default class Authentication extends Component {
    constructor() {
        super();

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        }
        
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
                                    <Home {...props} loggedInStatus={this.state.loggedInStatus}/>
                                )}
                            />
                            <Route exact path={"/dashboard"} component={Dashboard}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            
        )
    }
}