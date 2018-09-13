import React, { Component } from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./store";
import {BrowserRouter, Route} from "react-router-dom"

import MainPage from "./mainPage";
import Details from "./details";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/details" component={Details}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
