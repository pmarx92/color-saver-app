import '../card/Card.css';
import { useState } from 'react';


export default function Card({ color, removeCard }) {
    const [colorHex, setColorHex] = useState(color);
    const [copyText, setCopied] = useState();

    const handleCopy = (copyText) => {
        navigator.clipboard.writeText(copyText)
    }


    return (
        <div className="card">
            <div className="card-content" style={{ backgroundColor: colorHex }}>
                <button className='card-content-submitBtn' onClick={() => handleCopy(colorHex)}><span>{copyText ? 'Copied!' : color}</span></button>
                <div className='card-position--absolute'>
                    <button className="deleteButton" onClick={removeCard}>X</button>
                </div>
            </div>
        </div>
    );
}
