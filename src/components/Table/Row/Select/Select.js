import React, {useState } from 'react';
import classes from './Select.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";

const Select =React.memo((props) =>{
    let dropitems= null;  //items in the dropdown menu
    let dropclass= classes.noContent; 
    const [dropdown,setdropdown]=useState(false);
    let arrow = <FontAwesomeIcon icon={faChevronDown}  className={classes.arrow}/>
    
    dropitems = props.itemlist.map((item,Index) =>{
                    return <li value={item} 
                                key={Index} 
                                onClick={()=>selectHandler(item,props.rowid)}>
                                {item}
                            </li> 
                })

    const selectHandler=((item,rowid)=>     //function to close the dropdown if a item is selected
                {
                    props.selectHandler(item,rowid)   //refered to function to change the item selected
                    if(dropdown){
                                setdropdown(false);
                                 }
                 })


    const showContent = ()=>      //open and close dropdown on click
                        {  
                            setdropdown(!dropdown)
       
                        }
    if(dropdown)
            {
                dropclass= classes.dropContent;
                arrow=<FontAwesomeIcon icon={faChevronUp}  className={classes.arrow}/>
            }
    else{
             dropclass= classes.noContent; 
        }

    return(
        <td className={classes.Select}>
                <div className={classes.dropdown}>
                    <button className={classes.button}  
                    onClick={()=>showContent()}>
                    {props.selectedItem?props.selectedItem:"Select an option "}
                    {arrow}
                    </button>
                    <div>
                    <ul className={dropclass}>
                        {dropitems}
                    </ul>
                    </div>
                </div>
        </td>
        );
})

export default Select;

/*
<div className={classes.Select}><select value={props.item} onChange={(event)=>props.selectHandler(event,props.index)}>
<option  defaultValue="Nothing">Select an option</option>
{ren}
</select>
</div>
*/

/*    ren = props.itemlist.map((item,Index) =>{
        return <option value={item} key={Index}>{item}</option>
    
    })
*/