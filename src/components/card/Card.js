import '../card/Card.css';
import { useState, useEffect } from 'react';


export default function Card({ id, color, editCard, removeCard }) {
    const [colorHex, setColorHex] = useState(color);
    const [name, setName] = useState(color)

    const handleCopy = (copyText) => {
        navigator.clipboard.writeText(copyText)
    }

    const handleEdit = (event) => {
        event.stopPropagation();
        editCard(id, event.target.value, event);
    }

    async function fetchColorNames(input) {
        const hexCode = input.substring(1);
        const response = await fetch(`https://www.thecolorapi.com/id?hex=${hexCode}`);
        const data = await response.json();
        setName(data.name.value);
    }

    useEffect(() => {
        fetchColorNames(color);
    })


    return (

        <div className="card">
            <div className="card-content" style={{ backgroundColor: colorHex }} >
                <span className='colorName'>{name}<input className='card-content-submitBtn' onInput={handleEdit} /> </span>
                <div className='card-position--absolute' onClick={() => handleCopy(colorHex)}>
                    <button className="deleteButton" onClick={removeCard}>X</button>
                </div>
            </div>
        </div>
    );
}
