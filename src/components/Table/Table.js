import React, { useReducer, useState} from 'react';
import classes from './Table.module.scss';
import Row from './Row/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const Statereducer = (currentState,action)=>{
    switch(action.type){
                        case 'ADD':
                        return [...currentState,action.newRow];

                        case 'DELETE':  
                            {
                                const index = currentState.findIndex((el)=>
                                        {
                                             return el.rowid===action.index
                                         });    
                                currentState.splice(index,1) 
                                return [...currentState] ;
                            }

                        case 'SELECT':  
                            {
                                const index= currentState.findIndex((el)=>
                                    {
                                        return el.rowid===action.index
                                     });    
                                currentState[index].selectedItem[action.itemname]= action.selectedItem;
                                currentState[index].selected= action.selected;  
                                return [...currentState] ;
                            }

                        default:
                            throw new Error('Should not reach here')
                    }
        }



const Table = (props)=>{

const [State,setState] = useReducer(Statereducer,[]);
const [selectedRow,setselectedRow] = useState(null);

let rowDisplay= null;
if(selectedRow !== null && (State.length >= 1)){
                     rowDisplay= State[selectedRow].selectedItem;
                    }
const columitems = props.columnlist.map(el => 
                {
                     return el.name
                });

const columheading = columitems.map((el,index)=>{
    return (<th key={index}>{el}</th>)
}); 


const rowInputTypes =  props.columnlist.map(el => {
    return { name: el.name,
             inputType: el.inputType}
} );


const addRowHandler = ()=>
                    {
                    setState({
                        type:'ADD',
                        newRow: {
                                    rowid: new Date(),
                                    selectedItem: {
                                        Item: '',
                                        MaterialFee: 0,
                                        PackingFee: 0,
                                        UnpackingFee: 0
                                    },
                                    selected: false
                                }
                            })
                     }


const selectHandler =(item,itemname,index) => 
                    {
                        let selected = true;
                        if(itemname==='item' && item !== '')
                            {
                                selected=true;
                            }
                        setState(
                            {
                                type:"SELECT",
                                index: index,
                                itemname: itemname,
                                selectedItem:item,
                                selected: selected
                            })
                        
                    }





const removeRowHandler =(index) => {
                        setState({
                                    type: 'DELETE',
                                    index: index
                                })          
                            }

const selectRow =(rowid)=>{
    const index= State.findIndex((el)=>
    {
        return el.rowid===rowid
     });   
     setselectedRow(index)

}
                            

const row = State.map((el)=>{
        return (<Row key={el.rowid} 
                    rowid={el.rowid} 
                    itemlist={columitems} 
                    rowitems={rowInputTypes}
                    selectedItem={el.selectedItem.Item}
                    selected={el.selected}
                    selectHandler={selectHandler}
                    removeRowHandler={removeRowHandler}
                    Click={selectRow}>
                </Row>)
        })

return ( <div className={classes.Table}>
            <div className={classes.tbl}>
                <table>
                    <thead>
                        <tr>
                            {columheading}
                        </tr>
                    </thead>
                    <tbody>
                        {row}
                    </tbody>
                </table>
            </div>
            <div className={classes.btn}>
                <button onClick={addRowHandler}>
                    <FontAwesomeIcon icon={faPlus} className={classes.plus}/>
                    <span className={classes.add}> Add item</span>
                </button>
            </div>

            {rowDisplay?<div className={classes.Displayitem}>
                    <div>
                        <p>Selected item: {rowDisplay.Item}</p>
                        <p>Material Fee: {rowDisplay.MaterialFee}</p>
                        <p>Packing Fee: {rowDisplay.PackingFee}</p>
                        <p>Unpacking Fee: {rowDisplay.UnpackingFee}</p>
                    </div>
            </div>: null}
        </div>
    );
}

export default Table;