import React, {useState } from 'react';
import classes from './Select.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";

const Select = (props) =>{
   // let ren = null ;
    let drop= null;
    let dropclass= classes.noContent;
    let arrow = <FontAwesomeIcon icon={faChevronDown}  className={classes.arrow}/>
    const [dropdown,setdropdown]=useState(false);

/*    ren = props.itemlist.map((item,Index) =>{
        return <option value={item} key={Index}>{item}</option>
    
    })
*/

    drop = props.itemlist.map((item,Index) =>{
        return <li value={item} key={Index} onClick={()=>selectHandler(item,props.index)}>{item}</li> 
    })

    const selectHandler=((item,index)=>{
        props.selectHandler(item,index)
        if(dropdown){
            setdropdown(false);
        }
    })

    const showContent = ()=> {  
        setdropdown((prevState)=>{
            return !prevState});
        
    }
    if(dropdown){
    dropclass= classes.dropContent;
    arrow=<FontAwesomeIcon icon={faChevronUp}  className={classes.arrow}/>
    }else{
        dropclass= classes.noContent; 
    }

    return(<td className={classes.last}>
                <div className={classes.dropdown}>
                    <button className={classes.button}  onClick={()=>showContent()}>{props.item?props.item:"Select an option "}{arrow}</button>
                <div>
                <ul className={dropclass}>
                {drop}
                </ul>
                </div>
                </div>
        </td>)
        
        
        ;
}

export default Select;

/*
<div className={classes.Select}><select value={props.item} onChange={(event)=>props.selectHandler(event,props.index)}>
<option  defaultValue="Nothing">Select an option</option>
{ren}
</select>
</div>
*/