import React,{Component} from 'react';
import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom';

import '../styleMain.css';
import MainPage from "../../mainPage";

export  default  class View extends Component {
    constructor(props){
        super(props);
        this.state={logged:false};
    }
    render() {
        const {onLoggin} = this.props;

        return(
            <div>
                <h2>Login</h2>
                <div style={{border:`1px solid`,margin:`auto 10%`}}>
                <div style={{margin:`auto`,textAlign:`center`,margin:20}}>
                    username:<input type="text" ref={(ref) => this.username = ref} id="username"/>
                </div>
                <div style={{margin:`auto`,textAlign:`center`,margin:20}}>
                    password:<input type="password" ref={(ref) => this.password = ref} id="password"/>
                </div >
                    <div>
                        <button className="CloseButton">cancel</button>
                        <Link to="/"/>
                        <button className="SaveButton" onClick={() => {
                            if (this.username.value === 'tw' && this.password.value === 'tw') {
                                // debugger;
                                // onLoggin();
                                console.log("login!!=");
                                {this.setState({logged:true})};
                                console.log("login2");
                            }
                        }}>ok
                        </button>
                        {
                         this.state.logged&&   <Redirect to="/" />
                        }

                    </div>
                </div>
            </div>
        )
    }

}
