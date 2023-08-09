import './App.css';
import SingleCard from './components/SingleCard';
import { useState } from 'react';
import { useEffect } from 'react';

// Oyun kartlarının başlangıç durumunu temsil eden bir dizi oluşturuyoruz.
const cardImages = [
  {
    "src": "/img/helmet-1.png",
    matched: false,
  },
  {
    "src": "/img/potion-1.png",
    matched: false,
  },
  {
    "src": "/img/ring-1.png",
    matched: false,
  },
  {
    "src": "/img/scroll-1.png",
    matched: false,
  },
  {
    "src": "/img/shield-1.png",
    matched: false,
  },
  {
    "src": "/img/sword-1.png",
    matched: false,
  }
]

function App() {
  // State değişkenlerini kullanıyoruz.
  const [cards, setCards] = useState([]); // Kartları içeren dizi
  const [turns, setTurns] = useState(0); // Oyundaki hamle sayısı
  const [choiceOne, setChoiceOne] = useState(null); // İlk seçilen kart
  const [choiceTwo, setChoiceTwo] = useState(null); // İkinci seçilen kart
  const [disabled, setDisabled] = useState(false); // Kartlara tıklamayı devre dışı bırakmak için kullanılır

  // Kartları karıştırma işlemini gerçekleştiren fonksiyon.
  const shuffleCards = () => {
    // Kartları iki kez kopyalayıp karıştırıyoruz.
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5) // Kartları karıştırmak için sort() fonksiyonunu kullanıyoruz.
      .map((card) => ({ ...card, id: Math.random() })); // Her karta rastgele bir "id" atanır.

    // Karıştırılmış kartları güncelliyoruz.
    setCards(shuffledCards);
    setTurns(0); // Hamle sayısını sıfırlıyoruz.
  };

  // Kart seçimini ele alan fonksiyon.
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Kart eşleşmesini kontrol eden ve eşleşme durumuna göre kartları güncelleyen React.useEffect() hook'u.
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true); // Diğer kartlara tıklamayı devre dışı bırakıyoruz.

      if (choiceOne.src === choiceTwo.src) {
        // Eğer kartlar eşleşirse...
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src || card.src === choiceTwo.src) {
              return {
                ...card,
                matched: true, // Eşleşen kartları göstermek için "matched" değerini true yap.
              };
            } else {
              return card;
            }
          });
        });
        resetTurn(); // Kartları sıfırlıyoruz.
      } else {
        // Eğer kartlar eşleşmezse...
        setTimeout(() => resetTurn(), 1000); // Kartları 1 saniye geciktirerek sıfırlıyoruz.
      }
    }
  }, [choiceOne, choiceTwo]);

  // Uygulama başladığında kartları karıştırıyoruz.
  useEffect(() => {
    shuffleCards();
  }, []);

  // Hamle sırasını sıfırlama işlemini gerçekleştiren fonksiyon.
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1); // Hamle sayısını arttırıyoruz.
    setDisabled(false); // Kartları tekrar tıklanabilir yapma.
  };

  // Uygulama bileşeninin render işlemi.
  return (
    <main className="App">
      <h1 className='header'>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'>
        {cards.map((card => {
          return (
            // Her kart için SingleCard bileşenini oluşturuyoruz.
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              // Kartın durumuna göre görünürlük ve tıklanabilirlik ayarları.
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          );
        }))}
      </div>
      <p className='turns'>Turns: {turns}</p>
    </main>
  );
}

export default App;
