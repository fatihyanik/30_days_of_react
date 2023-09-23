import { useState, useEffect } from 'react';
import './App.css';
import Dice from './Dice';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

const App = () => {

  // Oyunun zarları ve oyun durumlarını depolamak için state'leri tanımla
  const [dice, setDice] = useState(allNewDice()); // Zarların durumu
  const [tenzies, setTenzies] = useState(false); // "Tenzies" durumu

  // Zarların durumu her güncellendiğinde çalışacak olan etkileşimli işlevi tanımla
  useEffect(() => {
    // Tüm zarlar tutulduysa
    const allHeld = dice.every((die) => {
      return die.isHeld;
    });

    // Tüm zarlar aynı değere sahipse
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => {
      return die.value === firstValue;
    });

    // Her iki koşul da sağlanıyorsa, "Tenzies" durumunu güncelle
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  // Yeni bir zar oluşturan yardımcı işlev
  function generateNewDie() {
    const rand = Math.floor(Math.random() * 6 + 1);
    return {
      value: rand,
      isHeld: false,
      id: nanoid(), // Rasgele bir benzersiz kimlik oluştur
    };
  }

  // Başlangıçta tüm zarları oluşturan yardımcı işlev
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  // Zarları yeniden atmayı veya yeni bir oyun başlatmayı sağlayan işlev
  const rollDice = () => {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) =>
          die.isHeld ? die : generateNewDie()
        )
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  };

  // Bir zarın tutulup bırakılmasını sağlayan işlev
  const holdDice = (id) => {
    setDice((prevState) =>
      prevState.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  // Zar bileşenlerini oluştur
  const diceElements = dice.map((die) => (
    <Dice
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  // Konsola zar durumlarını yazdır
  console.log(dice);

  // Oyun arayüzünü oluştur
  return (
    <main>
      {tenzies && <Confetti />} {/* Eğer "Tenzies" durumu true ise, konfeti efekti görüntüle */}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button
        className="roll-dice"
        onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
