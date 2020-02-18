import React from 'react';
import Select from './Select/Select';
import Input from './Input/Input';
import classes from './Row.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Row = (props) =>{
  let inputs=[];
  inputs = props.rowitems.map((el,index)=>{
    if(el === "select"){
     return  <Select key={index} index={props.index} item={props.item} itemlist={props.itemlist} 
      selectHandler={props.selectHandler}></Select>
  }else{
     return <td  key={index}><Input index={index} selected={props.selected} inputType={el}></Input></td>
  }
  })
  let icon = <FontAwesomeIcon icon={faTimes}  className={classes.cross}/>
  if(props.selected){
    icon =<FontAwesomeIcon icon={faTrashAlt}  className={classes.trash}/>
  }

  return(
      <tr className={classes.Wrapper}>
        {inputs}
        <td className={classes.last}><button onClick={()=>props.removeHandler(props.index)}>
        {icon}</button></td>
        </tr>
      
    )
}

export default Row;