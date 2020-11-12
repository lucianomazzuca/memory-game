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
  function resetGame() {
    //Reset caracter
    const caractersUpdated = caracters.map(caracter => {
      caracter.clicked = false;
      return caracter;
    });
    setCaracters(caractersUpdated);

    //Check best score
    if(score > bestScore){
      setBestScore(score);
    }

    //Reset score
    setScore(0);
  }

  const handleClick = (caracterClicked, e) => {
    if(caracterClicked.clicked === false) {

      //Change clicked status on this caracter
      const caractersUpdated = caracters.map(caracter => {
        if(caracter.id === caracterClicked.id) {
          caracter.clicked = true;
        }
        return caracter
      });

      setCaracters(caractersUpdated)
      setScore(prevState => prevState + 1)

    } else {
      //Reset 
      resetGame()
    }
  }


  const cards = caracters.map(caracter => {
    return <Card key={caracter.id} id={caracter.id} caracter={caracter} handleClick ={handleClick} />
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
