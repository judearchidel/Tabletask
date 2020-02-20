import React from 'react';
import Select from './Select/Select';
import Input from './Input/Input';
import classes from './Row.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Row = (props) =>{
  let inputs = props.rowitems.map((el,index)=>
                            {
                              if(el.inputType === "select")
                                {
                                    return  <Select key={props.rowid+index} 
                                                    rowid={props.rowid} 
                                                    selectedItem={props.selectedItem} 
                                                    itemlist={props.itemlist} 
                                                    selectHandler={props.selectHandler}
                                                    name={el.name}>
                                            </Select>
                                }else
                                {
                                    return <td key={props.rowid+index}><Input index={index}
                                                                  rowid={props.rowid} 
                                                                  selected={props.selected}
                                                                  selectedItem={props.selectedItem} 
                                                                  inputType={el.inputType}
                                                                  selectHandler={props.selectHandler}
                                                                  name={el.name}>
                                                          </Input>
                                            </td>
                            }
                            })
  let icon = <FontAwesomeIcon icon={faTimes}  className={classes.cross}/>
  if(props.selected)
                  {
                    icon =<FontAwesomeIcon icon={faTrashAlt}  className={classes.trash}/>
                  }
  
 
  
  return(<tr className={classes.Wrapper} onClick={()=>props.Click(props.rowid)}>
              {inputs} 
               <td className={classes.last}>
                    <button onClick={()=>props.removeRowHandler(props.rowid)}>
                    {icon}
                    </button>
              </td>
          </tr>  
    )
}

export default Row;