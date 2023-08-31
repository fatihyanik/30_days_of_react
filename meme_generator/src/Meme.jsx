import { useState } from "react"; // React'ten gerekli işlevi içe aktarıyoruz
import data from "./data.js"; // Veri dosyasını içe aktarıyoruz

export default function Meme() {
    // React bileşeni başlangıcı

    // Zorluk:
    // 1. Metin girdilerini yapısına kaydetmek için
    //    `topText` ve `bottomText` durum değişkenlerini ayarlayın.
    // 2. Sert kodlu metni, duruma kaydedilen metinle
    //    değiştirerek resimdeki metni güncelleyin.

    const [meme, setMeme] = useState({
        topText: "", // Üst metin başlangıçta boş
        bottomText: "", // Alt metin başlangıçta boş
        randomImage: "http://i.imgflip.com/1bij.jpg" // Başlangıçta sabit bir mizah resmi URL'si
    });

    const getText = (event) => {
        const { name, value } = event.target;
        setMeme((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };

    const [allMemeImages, setAllMemeImages] = useState(data); // Verileri durumda saklıyoruz

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes; // Tüm mizah resmi verilerini alıyoruz
        const randomNumber = Math.floor(Math.random() * memesArray.length); // Rastgele bir indis seçiyoruz
        const url = memesArray[randomNumber].url; // Rastgele mizah resmi URL'si
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url // Mizah resmini güncelliyoruz
        }));
    }

    return (
        <main>
            {/* Ana bileşen JSX yapısı */}
            <div className="form">
                <input
                    type="text"
                    placeholder="Üst metin"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={getText}
                />
                <input
                    type="text"
                    placeholder="Alt metin"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={getText}
                />
                <button className="form--button" onClick={getMemeImage}>
                    Yeni bir mizah resmi al 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Mizah Resmi" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
