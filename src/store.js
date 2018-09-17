import {createStore} from 'redux';


const Reducer = (state = [],action) => {
    switch (action.type) {
        case "ADD_ITEMS" :
            return [...state, action.item];
        case "LOGIN":
            return action.isSucceed;
        case "DELETE_ITEMS" :
            return state.filter(item=>item.id!==action.id);
        case "UPDATE_ITEMS":
            let newstate=state.filter(item=>item.id!==action.item.id);
            return [...newstate, action.item];
        case "SEARCH":
            console.log("Myaction= "+action);
            console.log("searchText = "+action.SearchText);
            // console.log(state.filter(s=>s.actionName.find(action.SearchText)));
            console.log(state);
            return state.filter(s=>s.actionName.includes(action.SearchText));

           //  // const product=this.props.items.find(x=>x.id==this.props.match.params.id);
           //  console.log("action= "+action.item);
           // // let newstate=state.find(x=>x.id==action.item.id);
           //  let newstate=state;
           // console.log("newstate=  "+ newstate);
           //  newstate.id=action.id;
           //  newstate.actionName=action.actionName;
           //  newstate.Tags=action.Tags;
           //  newstate.DueDate=action.DueDate;
           //  newstate.Status=action.Status;
           //  return newstate;
        default:
            return state;
    }
};


const input=[
    {id:1,actionName:"Meeting1 with PO",Tags:["Meeting"],DueDate:"2018-09-20",Status:"InProcess"},
    {id:2,actionName:"Meeting2",Tags:["Meeting"],DueDate:"2018-09-21",Status:"Finished"},
    {id:3,actionName:"Meeting3",Tags:["Meeting"],DueDate:"2018-09-22",Status:"Blocked"},
    {id:4,actionName:"Study Javascript",Tags:["Study"],DueDate:"2018-08-30",Status:"InProcess"},
]

export default createStore(Reducer,input);


