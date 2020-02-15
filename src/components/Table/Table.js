import React, { useReducer, useCallback } from 'react';
import classes from './Table.module.scss';
import Row from './Row/Row';

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
    selected: ""
}})
    },[])

const selectHandler =(event,index) => {
const item = event.target.value
setState({type:"SELECT",
index: index,
selected: item})
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
            selected={el.selected}
            selectHandler={selectHandler}
            removeHandler={removeHandler}
            ></Row>)
})

return (
        <div className={classes.Table}>
            <table>
            <thead>

                <tr>
                    {head}
                </tr>
                </thead>
                <tbody>
                {row}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan= '3'>
                    <button onClick={addRowHandler} >Add</button></td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Table;