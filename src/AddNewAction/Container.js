import {connect} from 'react-redux';
import  View from './component/View';

const mapStateToProps = (items) => ({items});
const mapDispatchToProps = (dispatch)=>({
    onDeleteItem:id => dispatch({type:"DELETE_ITEMS",id:id}),
    onAddItem: item => dispatch({type:"ADD_ITEMS", item}),
})

export default  connect(mapStateToProps,mapDispatchToProps)(View);