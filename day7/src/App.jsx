import './App.css'
import { useState } from 'react';

function App() {
  // State kullanarak form verilerini saklayalım
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Form gönderildiğinde çalışacak işlemleri burada ele alalım
  const handleSubmit = (event) => {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini önleyelim

    // Form verilerini işleme kodu burada yer alabilir
    console.log(formData);

    // Formu sıfırlayalım
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  // Inputlardaki değer değiştiğinde çalışacak fonksiyon
  const handleChange = (event) => {
    // Değişen input değerini state'e yansıtalım
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Adınız:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">E-posta:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="message">Mesajınız:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Gönder</button>
    </form>
  );
}


export default App
