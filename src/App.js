import React, {useState, useEffect} from 'react';
import data from './caracters';
import Card from './components/Card';
import Header from './components/Header';


function App() {
  //States
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [caracters, setCaracters] = useState(data)

  //Effects
  
  //Methods
  const handleClick = (e) => {
    console.log(e)
  }


  const cards = caracters.map(caracter => {
    return <Card key={caracter.id} caracter={caracter} handleClick ={handleClick} />
  })

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}/>
      <div className="card-container">
        {cards}
      </div>
    </div>
  );
}

export default App;
