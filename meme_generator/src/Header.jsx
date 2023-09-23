export default function Header() {
    // Header bileşeni başlangıcı

    return (
        // JSX dönüş yapısı, bileşenin görünen içeriğini oluşturur
        <header className="header">
            {/* Başlık bileşeni JSX yapısı */}
            <img
                src="./images/troll-face.png"
                className="header--image"
                alt="Troll Yüzü"
            />
            {/* Üstbilgi resmi */}
            <h2 className="header--title">Meme Oluşturucu</h2>
            {/* Başlık metni */}
            <h4 className="header--project">React Kursu - Meme Oluşturucu</h4>
            {/* Proje açıklaması */}
        </header>
    )
}
