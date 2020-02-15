import React from 'react';
import classes from './Select.module.scss';

const Select = (props) =>{
    let ren = null ;
    ren = props.itemlist.map((item,Index) =>{
        return <option value={item} key={Index}>{item}</option>
    
    })

    return(
        <div className={classes.Select}><select value={props.selected} onChange={(event)=>props.selectHandler(event,props.index)}>
        <option  defaultValue="Nothing"> -- select an option -- </option>
        {ren}
        </select>
        </div>);
}

export default Select;