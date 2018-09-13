import {createStore} from 'redux';


const Reducer = (state = [],action) => {
    switch (action.type) {
        case "ADD_ITEMS" :
            return [...state, action.item];
        case "DELETE_ITEMS" :
            return state.filter(item=>item.id!==action.id);
        default:
            return state;
    }
};


const input=[
    {id:1,actionName:"Meeting1 with PO",Tags:"Meeting",DueDate:"2018/09/20",Status:"In Progess"},
    {id:2,actionName:"Meeting2",Tags:"Meeting",DueDate:"2018/09/21",Status:"In Progess"},
    {id:3,actionName:"Meeting3",Tags:"Meeting",DueDate:"2018/09/22",Status:"In Progess"},
]

export default createStore(Reducer,input);


