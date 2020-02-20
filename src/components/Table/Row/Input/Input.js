import React, { useEffect, useState} from 'react';
import classes from './Input.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

const Input =React.memo((props) =>{
    
const [isvalid,setisvalid]=useState(true);
const [value,setValue] = useState(true);
let renderInput = null;
let  myref= React.createRef();   //ref for autofocus
let inputclasses=classes.Input;
let name ='';
if(props.name==="Material Fee")
        {
            name="MaterialFee"
        }else if(props.name==="Packing Fee")
        {
            name="PackingFee"
        }else if(props.name==="Unpacking Fee")
        {
            name="UnpackingFee"
        }

const checkValidity= (event)=>{   
    //function to check validations of input
    setValue(event.target.value)
    const  item=event.target.value
    if(item < 0 || item >5000 )
    { if(isvalid)
        {
            setisvalid(false); 
        } 
    }else{
    if(!isvalid)
        {
            setisvalid(true);
        }
}
}

if(!isvalid)
        {
            inputclasses=classes.NotValid
        }
if(props.inputType === "currency"){
            renderInput=<div>
                    <span className={classes.prefix}>$</span>
                    {props.index===1?<input id='inp'
                            type="number" className={inputclasses} 
                            ref={myref} placeholder="0.00"  
                            disabled={!props.selected} 
                            onInput={(event)=>{checkValidity(event)}}>
                    </input>:<input id='inp'
                    type="number" className={inputclasses} 
                    placeholder="0.00"  
                    disabled={!props.selected} 
                    onInput={(event)=>{checkValidity(event)}}>
            </input>}
                    {!isvalid?<div>
                                 <p className={classes.req}>
                                 <FontAwesomeIcon icon={faSortUp} /> 
                                 Amount betwee $0 and $5000</p>
                            </div>:null}
                 </div>
}else if(props.inputType === "text") {
             renderInput = <input id='inp'
                            className={inputclasses}
                            placeholder = "text" 
                            disabled={!props.selected}>
                    </input>
            }

useEffect(()=>{ 
                if(props.index===1 && props.selectedItem) //to focus to first element
                    {
                        myref.current.focus();
                    }
                },[props.selectedItem])

useEffect(()=>{
                if(isvalid)
                {props.selectHandler(value,name,props.rowid)}
            },[value,name,isvalid]);
    


return(
     <div className={classes.inp}>
        {renderInput}
    </div> 
    );
})
export default Input;



/*
select 	- Show a select box
		currency 	- show a text field with dollar icon
		text		- show a normal text field
*/