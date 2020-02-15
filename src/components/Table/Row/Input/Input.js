import React from 'react';
import classes from './Input.module.scss';


const Input = (props) =>{
let ren= null;
if(props.inputType === "currency"){
    ren =<div><span className={classes.prefix}>$</span>
   { <input></input>}</div>
  }else {
   if(props.inputType === "text") {
  ren = <input placeholder = "text"></input>
}
}
    return(<div className={classes.inp}>
        {ren}
       </div> );

    }
export default Input;
/*
select 	- Show a select box
		currency 	- show a text field with dollar icon
		text		- show a normal text field
*/