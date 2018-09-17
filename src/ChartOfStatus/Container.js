import {connect} from 'react-redux';
import  View from './component/View';

const mapStateToProps = (items) => ({items});
const mapDispatchToProps = (dispatch)=>({
    onDeleteItem:id => dispatch({type:"DELETE_ITEMS",id:id})
})

export default  connect(mapStateToProps,mapDispatchToProps)(View);