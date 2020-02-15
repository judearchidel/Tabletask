import React from 'react';
import Select from './Select/Select';
import Input from './Input/Input';
import classes from './Row.module.scss';
const Row = (props) =>{
  let inputs=[];
  inputs = props.rowitems.map((el,index)=>{
    if(el === "select"){
     return <td key={index}> <Select index={props.index} selected={props.selected} itemlist={props.itemlist} 
      selectHandler={props.selectHandler}></Select></td>
  }else{
     return <td  key={index}><Input index={index} selected={props.selected} inputType={el}></Input></td>
  }

  })

  return(
      <tr>
        {inputs}
        <td><button onClick={()=>props.removeHandler(props.index)}>remove</button></td>
      </tr>
    )
}

export default Row;