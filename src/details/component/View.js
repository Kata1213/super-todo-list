import React,{Component} from 'react';
import {Button, Modal} from "react-bootstrap";
import '../styleDetals.css';

export  default  class View extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title className="mytitle">Details</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                                <table>
                                    <tr>
                                        <td className="mytd">Action:</td>
                                        <td className="mytd"><input type="text"/></td>
                                    </tr>
                                    <tr>
                                        <td className="mytd"> Due Date:</td>
                                        <td className="mytd"><input type="date"/></td>
                                    </tr>
                                    <tr>
                                        <td className="mytd">Status:</td>
                                        <td className="mytd"><select>
                                            <option value="InProcess">InProcess</option>
                                            <option value="Blocked">Blocked</option>
                                            <option value="Finished">Finished</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td className="mytd">Tags:</td>
                                        <td className="mytd"><input type="text"/></td>
                                    </tr>

                                </table>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button className="CloseButton">Close</Button>
                            <Button className="SaveButton">OK</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>

            </div>
            )

    }
}