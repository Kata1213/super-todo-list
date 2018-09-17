import React,{Component} from 'react';
import {Button, Modal} from "react-bootstrap";
import '../styleDetals.css';
import Select from 'react-select';
import {Link} from "react-router-dom";

const colourOptions = [
    { value: 'Meeting', label: 'Meeting', color: '#00B8D9', isFixed: true },
    { value: 'Study', label: 'Study', color: '#0052CC', disabled: true },
    { value: 'Personal', label: 'Personal', color: '#5243AA' },
    { value: 'In progress', label: 'In progress', color: '#FF5630', isFixed: true },
    { value: 'Others', label: 'Others', color: '#FF8B00' },

];

export  default  class View extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const {items, onAddItem, closeModal} = this.props;
        return(
            <div>
                <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title className="mytitle">Add New Todo List</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                                <table>
                                    <tr onChange={(event) => this.ChangeAction(event)}>
                                        <td className="mytd" id="action">Action:</td>
                                        <td className="mytd"><input type="text" /></td>
                                    </tr>
                                    <tr onChange={(event) => this.ChangeDate(event)}>
                                        <td className="mytd"> Due Date:</td>
                                        <td className="mytd"><input type="date" /></td>
                                    </tr>
                                    <tr onChange={(event) => this.ChangeStatus(event)}>
                                        <td className="mytd">Status:</td>
                                        <td className="mytd" >
                                            <select>
                                            <option value="InProcess">InProcess</option>
                                            <option value="Blocked">Blocked</option>
                                            <option value="Finished">Finished</option>
                                            </select>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="mytd">Tags:</td>
                                        <td className="mytage"><div>
                                            <Select
                                                isMulti
                                                name="colors"
                                                options={colourOptions}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                                onChange={this.handleChange}
                                            />
                                        </div></td>
                                    </tr>

                                </table>

                        </Modal.Body>

                        <Modal.Footer >
                            <Link to="/">
                            <Button className="CloseButton" >Close</Button>
                            </Link>
                            <Link to="/">
                            <Button className="SaveButton" onClick={() => {
                                onAddItem(this.getNewItem(items));
                            }}>OK</Button>
                            </Link>

                        </Modal.Footer>
                    </Modal.Dialog>
                </div>

            </div>
            )

    }

    getNewItem(items) {
        const Id = items.length+1;
        return {id:Id, actionName:this.state.actionName,Tags:this.state.Tags,DueDate:this.state.DueDate,
            Status:this.state.Status}
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    ChangeAction(event) {
        this.setState({actionName: event.target.value});
    }

    ChangeDate(event){
        this.setState({DueDate: event.target.value});
    }

    ChangeStatus(event){
        this.setState({Status: event.target.value});
    }
    ChangeTags(event){
        console.log("tags!!!!!"+event.target.value);
        this.setState({Tags: event.target.options});
    }

    handleChange = (selectedOption) => {
        let tags=selectedOption.map(s=>s.value)
        this.setState({ Tags:tags });
        console.log(`Option selected:`, tags);
    }

}