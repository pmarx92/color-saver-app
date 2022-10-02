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
    color: '#A7F2E4',
    colorName: 'I dont know'
  },
  {
    id: nanoid(),
    color: '#01261C',
    colorName: 'I dont know'
  },
  {
    id: nanoid(),
    color: '#4ABF2A',
    colorName: 'I dont know'
  },
  {
    id: nanoid(),
    color: '#98D936',
    colorName: 'I dont know'
  },
  {
    id: nanoid(),
    color: '#F2ECE4',
    colorName: 'I dont know'
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

  const editCard = (id, newHex, event) => {
    event.stopPropagation();
    setHexCodes(hexCodes.map((hexCode) => hexCode.id === id ? { ...hexCode, color: newHex } : hexCode))

    console.log("App: " + id + " " + newHex);
  }

  const addNewCard = (newColor) => {
    setHexCodes([...hexCodes, { id: nanoid(), color: newColor }]);
  }



  return (
    <div className="App">
      <Header />
      <Form addNewCard={addNewCard} />
      <main className='main'>
        {hexCodes.map((hexCode) => (
          <Card key={hexCode.id} id={hexCode.id} color={hexCode.color} removeCard={() => removeCard(hexCode.id)} editCard={editCard} />
        ))}
      </main>
    </div>

  );
}

export default App;
