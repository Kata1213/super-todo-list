import React,{Component} from 'react';
import {Button, Modal} from "react-bootstrap";
import '../style.css';

export  default  class View extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>details</h1>
                <div className="static-modal">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>One fine body...</Modal.Body>

                        <Modal.Footer>
                            <Button>Close</Button>
                            <Button bsStyle="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>

            </div>
            )

    }
}