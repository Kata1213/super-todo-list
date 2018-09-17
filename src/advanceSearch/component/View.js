import React,{Component} from 'react';
import Select from 'react-select';

export  default  class View extends Component {
    render() {
        return(
            <div>
                <div>
              <input type="date" style={{margin:20}}/>
              <input type="date"/>
                <button style={{marginLeft:10}}>OK</button>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        )
    }
}