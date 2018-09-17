import React,{Component} from 'react';
import {Link} from "react-router-dom";
import '../styleMain.css';
import ChartOfStatus from "../../ChartOfStatus";
import ChartOfDate from "../../ChartOfDate";
import AdvancedPage from "../../advanceSearch";




export  default  class View extends Component{
    constructor(props) {
        super(props);
        this.state = {showAdvancePage: false};
        this.state={
            actionName: "actionName_test",
            Tags:"Tags_test",
            DueDate:"2018/09/16",
            Status:"In progress"
        }
        this.state={SearchText:""};
    }

    render(){
        console.log(this.props.items);
        return(
            <div>
                <div>
                    <Link to="/login">
                    <a href="" style={{marginLeft:`90%`}}>Login</a>
                    </Link>
                </div>

                <div id="tab">
                    <ul className="tabs">
                        <li>
                            <input type="radio" name="tabs" id="tab1" checked/>
                            <label htmlFor="tab1">To dos</label>
                            <div id="tab-content1" className="tab-content" >
                                <div style={{margin:20}}>
                                    <input type="text" className="SearchText" onChange={(event) => this.ChangeSearch(event)}/>
                                    <button  onClick={() => {this.props.onSearchItem(this.state.SearchText)}}>ok</button>


                                    <a href="javascript:void(0);"  onClick={() => this.showAdvanedPage()} style={{margin:20}}>Advanced</a>

                                    {
                                        this.state.showAdvancePage ? <AdvancedPage/> : null
                                    }
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
                                            <td>{item.Tags.join(",")}</td>
                                            <td>{item.DueDate}</td>
                                           <td>{item.Status}</td>
                                            <td>
                                                <Link to={`/details/${item.id}`}>
                                                <a href={""} style={{margin:10}}>Details</a>
                                                </Link>
                                                <a href="javascript:void(0);"  onClick={() => {this.props.onDeleteItem(item.id)}}  style={{margin:10}} >Delete</a>
                                            </td>
                                        </tr>

                                    )}
                                </table>
                                <div>
                                    <Link to="/addNewAction">
                                    <button className="AddButton">+</button>
                                    </Link>
                                </div>
                            </div>

                        </li>


                        <li>
                            <input type="radio" name="tabs" id="tab2"/>
                            <label htmlFor="tab2">Static</label>
                            <div id="tab-content2" className="tab-content">
                                <div style={{margin:50}}>
                                    <input type="text"/>
                                    <a href=""  style={{margin:20}}>Advanced</a>
                                </div>
                                <div id="chart" >
                                    <ChartOfStatus/>
                                </div>
                                <div id="chart">
                                    <ChartOfDate/>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )

    }
    showAdvanedPage(){
        this.setState({ showAdvancePage:true });
    }
    ChangeSearch(event){
        this.setState({SearchText: event.target.value});
    }
}