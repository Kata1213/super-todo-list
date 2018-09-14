import React,{Component} from 'react';
import {Link} from "react-router-dom";
import '../styleMain.css';

export  default  class View extends Component{
    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    render(){
        return(
            <div>
                <div>
                    <a href="" style={{marginLeft:`90%`}}>Login</a>
                </div>

                <div id="tab">
                    <ul className="tabs">
                        <li>
                            <input type="radio" name="tabs" id="tab1" checked/>
                            <label htmlFor="tab1">To dos</label>
                            <div id="tab-content1" className="tab-content" >
                                <div style={{margin:20}}>
                                    <input type="text"/>
                                    <a href="" >Advanced</a>
                                </div>
                                <table>
                                    <tr>
                                        <th style={{margin:10}}>Action</th>
                                        <th>Tags</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                        <th>Actions</th>

                                    </tr>

                                    {this.props.items.map(item=>
                                        <tr>
                                            <td>{item.actionName}</td>
                                            <td>{item.Tags}</td>
                                            <td>{item.DueDate}</td>
                                            <td>{item.Status}</td>
                                            <td>
                                                <Link to="/details">
                                                <a href={""} style={{margin:10}}>Details</a>
                                                </Link>
                                                <a href={""} style={{margin:10}}>Delete</a>
                                            </td>
                                        </tr>

                                    )}
                                </table>
                                <div>
                                    <Link to="/details">
                                    <button className="AddButton">+</button>
                                    </Link>
                                </div>
                            </div>

                        </li>


                        <li>
                            <input type="radio" name="tabs" id="tab2"/>
                            <label htmlFor="tab2">Static</label>
                            <div id="tab-content2" className="tab-content">
                                <p>敬请期待</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )

    }


}