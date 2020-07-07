import React, { useState } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Button } from '@material-ui/core';
import ListComp from './ListComp';

const ToDoList = () => {

    const [item, setItem] = useState("");
    const [itemArray, setItemArray] = useState([]);

    const ItemChange = (event) => {
        setItem(event.target.value);
    }

    const itemDisplay = () => {
        setItemArray((prevVal) => {
            return [...prevVal, item];

        })
        console.log(item);
        setItem("");
    }

    return (
        <div className="container">
            <div className="card">
                <div className="text-align">
                    <span className="title">To Do List</span>
                    <hr /><br />

                    <input className="input-field" value={item} type="text"
                        placeholder="Enter your task" onChange={ItemChange} />
                    <Button className="newBtn" onClick={itemDisplay}>
                        <AddCircleOutlineIcon />
                    </Button>
                </div>
                <ul>
                    {itemArray.map((val) => {
                        return <li><ListComp text={val} /></li>
                    })}
                </ul>
            </div>

        </div>
    )
}
export default ToDoList;