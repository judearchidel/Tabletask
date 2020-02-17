import React, { useReducer, useCallback } from 'react';
import classes from './Table.module.scss';
import Row from './Row/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Statereducer = (currentState,action)=>{
    switch(action.type){
      case 'ADD':
      return [...currentState,action.new];
      case 'DELETE':  
      {
      const abb = currentState;
      const ab= currentState.findIndex((el)=>{
        return el.rowid===action.index
      });    

      abb.splice(ab,1) 

      console.log(abb)
      return [...abb] ;
      }
      case 'SELECT':  
      {
      const abb = currentState;
      const ab= currentState.findIndex((el)=>{
        return el.rowid===action.index
      });    
      abb[ab].item= action.item;
      abb[ab].selected= action.selected;  
      return [...abb] ;
      }
      default:
        throw new Error('Should not reach here')
    }
  }

const Table = (props)=>{

const [State,setState] = useReducer(Statereducer,[]);
const items = props.columnlist.map(el => {
    return el.name
} );
const head = items.map((el,index)=>{
    return (<th key={index}>{el}</th>)
}); 

let row = [];
const rows =  props.columnlist.map(el => {
    return el.inputType
} );


const addRowHandler = useCallback(()=>{
    setState({type:'ADD',
new: {
    rowid: new Date(),
    item: '',
    selected: false
}})
    },[])

const selectHandler =(event,index) => {
const item = event.target.value;
console.log(item)
let selected = false;
if(item !== 'Select an option'){
    selected=true;
}
setState({type:"SELECT",
index: index,
item: item,
selected: selected
 })
}

const removeHandler =(index) => {
setState({
    type: 'DELETE',
    index: index
})
}
row = State.map((el,i)=>{
        return (<Row key={i} index={el.rowid} itemlist={items} 
            rowitems={rows}
            item={el.item}
            selected={el.selected}
            selectHandler={selectHandler}
            removeHandler={removeHandler}
            ></Row>)
})

return (
        <div className={classes.Table}>
            <div className={classes.tbl}>
            <table>
            <thead>
                <tr>
                    {head}
                </tr>
                </thead>
                <tbody>
                {row}
                </tbody>
            </table>
            </div>
            <div className={classes.btn}>
            <button onClick={addRowHandler} ><FontAwesomeIcon icon={faPlus}  className={classes.plus}/>
            <span className={classes.add}> Add item</span></button>
            </div>
            <div>
            
          </div>
        </div>
    );
}

export default Table;