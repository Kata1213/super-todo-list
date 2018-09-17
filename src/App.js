import React, { Component } from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./store";
import {BrowserRouter, Route} from "react-router-dom"

import MainPage from "./mainPage";
import Details from "./details";
import Login from "./login";
import AddNewAction from "./AddNewAction";
import Chart from "./ChartOfStatus";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/details/:id" component={Details}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/addNewAction" component={AddNewAction}/>
                        <Route path="/chart" component={Chart}/>

                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
