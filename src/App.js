import { saveToLocal, loadFromLocal } from '../src/storage/Storage';
import './App.css';
import Header from '../src/components/header/Header';
import Card from '../src/components/card/Card';
import Form from '../src/components/form/Form';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';


const colors = [
  {
    id: nanoid(),
    color: '#A7F2E4'
  },
  {
    id: nanoid(),
    color: '#01261C'
  },
  {
    id: nanoid(),
    color: '#4ABF2A'
  },
  {
    id: nanoid(),
    color: '#98D936'
  },
  {
    id: nanoid(),
    color: '#F2ECE4'
  }
];

function App() {
  const [hexCodes, setHexCodes] = useState(loadFromLocal("hexCodes") || colors);

  useEffect(() => {
    saveToLocal('hexCodes', hexCodes)
  }, [hexCodes])

  const removeCard = (id) => {
    const removeColor = [...hexCodes].filter(hexCode => hexCode.id !== id)

    setHexCodes(removeColor);
  }

  const addNewCard = (newColor) => {
    setHexCodes([...hexCodes, { id: nanoid(), color: newColor }]);
    console.log(newColor);
  }



  return (
    <div className="App">
      <Header />
      <Form addNewCard={addNewCard} />
      <main className='main'>
        {hexCodes.map((hexcode) => (
          <Card key={hexcode.id} color={hexcode.color} removeCard={() => removeCard(hexcode.id)} />
        ))}
      </main>
    </div>

  );
}

export default App;
