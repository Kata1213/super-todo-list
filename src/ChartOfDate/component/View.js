import React,{Component} from 'react';
import {Link} from "react-router-dom";
import Select from 'react-select';
import {Pie} from 'react-chartjs-2';

export  default  class View extends Component {
    render() {
        const data = {
            labels: [
                'Out of date',
                'In 1 day',
                'In 3 day',
            ],
            datasets: [{
                data: [
                    this.props.items.filter(item => ((Date.parse(item.DueDate)-Date.parse("2018-9-20"))/(1000 * 60 * 60 * 24))<1).length,
                    this.props.items.filter(item => ((Date.parse(item.DueDate)-Date.parse("2018-9-20"))/(1000 * 60 * 60 * 24))<2&&((Date.parse(item.DueDate)-Date.parse("2018-9-20"))/(1000 * 60 * 60 * 24))>1).length,
                    this.props.items.filter(item => ((Date.parse(item.DueDate)-Date.parse("2018-9-20"))/(1000 * 60 * 60 * 24))<4&&((Date.parse(item.DueDate)-Date.parse("2018-9-20"))/(1000 * 60 * 60 * 24))>2).length,

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