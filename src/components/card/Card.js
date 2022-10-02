import '../card/Card.css';
import { useState, useEffect } from 'react';


export default function Card({ id, color, editCard, removeCard }) {
    const [colorHex, setColorHex] = useState(color);


    const handleCopy = (copyText) => {
        navigator.clipboard.writeText(copyText)
    }

    const handleEdit = (event) => {
        event.stopPropagation();
        editCard(id, event.target.value, event);
    }

    return (

        <div className="card">
            <div className="card-content" style={{ backgroundColor: colorHex }} >

                <span>{colorHex}<input className='card-content-submitBtn' onChange={handleEdit} /> </span>
                <div className='card-position--absolute' onClick={() => handleCopy(colorHex)}>
                    <button className="deleteButton" onClick={removeCard}>X</button>
                </div>
            </div>
        </div>
    );
}
