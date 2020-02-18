import React, { useEffect, useState } from 'react';
import classes from './Input.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

const Input = (props) =>{

const [isvalid,setisvalid]=useState(true);

let ren= null;
let  myref= React.createRef();
let inputclasses=classes.Input;
let item=0;

const checkValidity= (event)=>{    
item = event.target.value;
     setisvalid(item.trim() !== ''); 
   if(item < 0 || item >5000 ){
       setisvalid(false);  
   }
}
if(!isvalid){
    inputclasses=classes.NotValid
}
if(props.inputType === "currency"){
            ren=<div><span className={classes.prefix}>$</span>
            <input  key={props.index} type="number" className={inputclasses} ref={myref} placeholder="0"  disabled={!props.selected} onChange={(event)=>{checkValidity(event)}}></input>
            {!isvalid?<div className={classes.box}>
            <p  className={classes.req}><FontAwesomeIcon icon={faSortUp} /> Amount betwee $0 and $5000</p></div>:null}
            </div>
}else {
        if(props.inputType === "text") {
            ren = <input  key={props.index} className={inputclasses} placeholder = "text" disabled={!props.selected}></input>
        }
}
useEffect(()=>{ 
                if(props.index===1 && props.selected){
                myref.current.focus();
             
            }
        })

 return(
     <div className={classes.inp}>
        {ren}
    </div> );

}


export default Input;
/*
select 	- Show a select box
		currency 	- show a text field with dollar icon
		text		- show a normal text field
*/