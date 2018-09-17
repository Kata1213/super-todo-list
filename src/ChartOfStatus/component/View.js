import React,{Component} from 'react';
import {Link} from "react-router-dom";
import Select from 'react-select';
import {Pie} from 'react-chartjs-2';

export  default  class View extends Component {
    render() {
        const data = {
            labels: [
                'InProgress',
                'Blocked',
                'Finished',
            ],
            datasets: [{
                data: [
                    this.props.items.filter(s => s.Status == "InProcess").length,
                    this.props.items.filter(s => s.Status == "Blocked").length,
                    this.props.items.filter(s => s.Status == "Finished").length,
                ],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };
        return (
            <div>
                <Pie data={data} />
            </div>
        );
    }

}



//
// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
// ];
//
// export  default  class View extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedOption: null,
//         }
//     }
//     handleChange = (selectedOption) => {
//         this.setState({ selectedOption });
//         console.log(`Option selected:`, selectedOption);
//     }
//
//
//     render() {
//         const { selectedOption } = this.state;
//         return(
//             <div>
//                 <Select
//                     value={selectedOption}
//                     onChange={this.handleChange}
//                     options={options}
//                 />
//             </div>
//         )
//     }
// }