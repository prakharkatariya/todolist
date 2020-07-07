import React, { useState } from 'react'
import DoneIcon from '@material-ui/icons/Done';

const ListComp = (props) => {
    const [line, setline] = useState(false);
    const cutIt = () => {
        setline(true)
    }
    return (
        <div>
            <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}
                <span onClick={cutIt} ><DoneIcon /></span>
            </li>
        </div>
    )
}

export default ListComp
