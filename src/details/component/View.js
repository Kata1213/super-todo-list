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
        {console.log(this.props)}
        const product=this.props.items.find(x=>x.id==this.props.match.params.id);
        console.log(product);
        this.state={
            id:product.id,
            actionName: product.actionName,
            Tags:product.Tags,
            DueDate:product.DueDate,
            Status:product.Status
        }
    }



    render() {
        const product=this.props.items.find(x=>x.id==this.props.match.params.id);
        console.log(product);
        const {items, onUpdateItem, closeModal} = this.props;
        return(
            <div>
                <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title className="mytitle">Details</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                                <table>
                                    <tr onChange={(event) => this.ChangeAction(event)}>
                                        <td className="mytd">Action:</td>
                                        <td className="mytd"><input type="text" defaultValue={`${product.actionName}`}/></td>
                                    </tr>
                                    <tr onChange={(event) => this.ChangeDate(event)}>
                                        <td className="mytd"> Due Date:</td>
                                        <td className="mytd"><input type="date" defaultValue={`${product.DueDate}`}/></td>
                                    </tr>
                                    <tr onChange={(event) => this.ChangeStatus(event)}>
                                        <td className="mytd">Status:</td>
                                        <td className="mytd" >
                                            <select>
                                            <option value="InProcess" selected= {product.Status === "InProcess" ? "selected" : ""}>InProcess</option>
                                            <option value="Blocked" selected={product.Status === "Blocked" ? "selected" : ""}>Blocked</option>
                                            <option value="Finished" selected={product.Status === "Finished" ? "selected" : ""}>Finished</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td className="mytd">Tags:</td>
                                        <td className="mytage"><div>


                                            <Select
                                                defaultValue={product.Tags.map(tag=>{
                                                    return colourOptions.find(x=>x.value==tag)
                                                })}
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
                                onUpdateItem(this.getNewItem(items));
                            }}>OK</Button>
                            </Link>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>

            </div>
            )

    }

    getNewItem(items) {
        // console.log("what???"+product.id);
        return {id:this.state.id,actionName:this.state.actionName,Tags:this.state.Tags,DueDate:this.state.DueDate,
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

    handleChange = (selectedOption) => {
        let tags=selectedOption.map(s=>s.value)
        this.setState({ Tags:tags });
        console.log(`Option selected:`, tags);
    }

}