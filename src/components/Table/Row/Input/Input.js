import React from 'react';
import classes from './Input.module.scss';


const Input = (props) =>{
let ren= null;

if(props.inputType === "currency"){
    if(props.index===1 && props.selected){ 
        ren=<div><span className={classes.prefix}>$</span>
   <input autoFocus={true} placeholder="0"></input></div>
    }else{
    ren =<div><span className={classes.prefix} >$</span>
   <input placeholder="0"></input></div>
    }
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