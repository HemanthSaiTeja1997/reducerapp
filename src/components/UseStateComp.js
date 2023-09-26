import React, { useReducer } from 'react';
import { Clear_List,Remove_List,Reset_List } from './Action';
import reducer from './Reducer';
export  const data=[
    {id:1,name:'Hemanth'},
    {id:2,name:'Sai'},
    {id:3,name:'Teja'},
    {id:4,name:'Varun'},
    {id:5,name:'Goku'},];
    const defaultState={
        people:data,
    };

export default function UseStateComp() {
    const[state,dispatch]=useReducer(reducer,defaultState);

        // const[people,setPeople]=useState(data);
        const removeName=(id)=>{
            dispatch({type:Remove_List,payload:{ id }});

            // const dummy=people.filter((e)=>e.id !== id);
            // setPeople(dummy);
        }

        const clearAll=()=>{
            dispatch({type:Clear_List});
            // setPeople([]);
        }
        const restAll=()=>{
            dispatch({type:Reset_List})
            // setPeople(data);
        }
    
  return (
    <div>
        {state.people.map((person)=>{
            const{id,name}=person;
            return(
                <>
                <h3>{name}</h3>
                <button  style={{marginTop:'2rem',color:'blue'}} onClick={()=>{removeName(id)}}>remove</button>
                </>
            )
        })}
        <div>

        <button style={{marginTop:'2rem',color:'red'}} onClick={clearAll}>ClearAll</button>
        <button style={{marginTop:'2rem',color:'orange'}}  onClick={restAll}>Reset</button>
        </div>

      
    </div>
  )
}
