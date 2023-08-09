// SingleCard bileşeni tanımlanıyor. Bu bileşen, bir kartın görsel temsilini oluşturur.
// eslint-disable-next-line react/prop-types
const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  // Kart tıklama işlemini ele alan fonksiyon.
  const handleClick = () => {
    // Eğer kart tıklanabilir durumdaysa, handleChoice fonksiyonunu çağırarak kartı seçer.
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    // Kartın dışarıdan verilen class name'iyle birlikte "card" div içinde oluşturulması.
    <div className="card">
      {/* Kartın ön ve arka yüzünü içeren div */}
      <div className={flipped && "flipped"}>
        {/* Kartın ön yüzü */}
        <img
          className='front'
          // eslint-disable-next-line react/prop-types
          src={card.src} // Kartın görüntüsünün src'si.
          alt="card-front" // Görüntü yüklenemezse gösterilecek alternatif metin.
        />
        {/* Kartın arka yüzü */}
        <img
          className='back'
          src='/img/cover.png' // Kapalı kartın simgesinin src'si.
          alt='card-back' // Görüntü yüklenemezse gösterilecek alternatif metin.
          onClick={handleClick} // Kart tıklandığında handleClick fonksiyonunu çağırır.
        />
      </div>
    </div>
  );
};

export default SingleCard;
