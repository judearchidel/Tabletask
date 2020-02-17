import React from 'react';
import classes from './Select.module.scss';

const Select = (props) =>{
    let ren = null ;
    ren = props.itemlist.map((item,Index) =>{
        return <option value={item} key={Index}>{item}</option>
    
    })

    return(<td className={classes.last}>
        <div className={classes.Select}><select value={props.item} onChange={(event)=>props.selectHandler(event,props.index)}>
        <option  defaultValue="Nothing">Select an option</option>
        {ren}
        </select>
        </div>
        </td>);
}

export default Select;