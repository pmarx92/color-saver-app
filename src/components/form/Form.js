import '../form/Form.css';
import { useState } from 'react';


export default function Form({ addNewCard }) {
    const [hex, setHex] = useState("");
    let color = "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);


    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const { hexColor } = form.elements;
        addNewCard(hexColor.value);

        form.reset();
    }

    return (
        <div >
            <form style={{ backgroundColor: color }} onSubmit={handleForm}>
                <fieldset>
                    <h2>Choose your Color</h2>
                    <p>{color}</p>

                    <label htmlFor="hexColor">Insert Hex Code:</label>
                    <input type="text" name="hexColor" id="hexColor" placeholder='Add a Hex Code'></input>

                </fieldset>
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}
