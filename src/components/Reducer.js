import { Clear_List,Remove_List,Reset_List } from './Action';
import {data} from './UseStateComp';

const reducer=(state,action)=>{
    if(action.type === Clear_List){
        return {...state,people:[]};
    } 
    if(action.type === Reset_List){
        return {...state,people:data};
    }
    if(action.type === Remove_List){
        const newData=state.people.filter((person)=>person.id !== action.payload.id);
        return {...state,people:newData};
    }
    throw new Error(`NO Matching "${action.type}" - action type  `);
};

export default reducer;