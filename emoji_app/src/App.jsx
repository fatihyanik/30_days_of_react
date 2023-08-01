import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import EmojiData from './EmojiData';

function App() {
  // Arama sorgusu için state ve bu state'i güncellemek için fonksiyon
  const [search, setSearch] = useState("");

  // Filtrelenmiş emoji verileri için state
  const [data, setData] = useState([]);

  // Arama sorgusu değiştiğinde çalışacak olan useEffect
  useEffect(() => {
    // Emoji verilerini filtrele
    const newData = EmojiData.filter((emoji) => {
      return emoji.title.toLowerCase().includes(search.toLowerCase());
    });
    // Filtrelenmiş verileri data state'ine ata
    setData(newData);
  }, [search]);

  return (
    <div className="main-container">
      {/* Header bileşenini render et, setSearch ve search prop'larını geçir */}
      <Header setSearch={setSearch} search={search} />

      {/* Filtrelenmiş emoji verilerini ekranda listele */}
      {data.map((emoji, index) => (
        <div key={index}>
          <div className='emoji-div'>{emoji.title} {emoji.symbol}</div>
        </div>
      ))}
    </div>
  );
}

export default App;