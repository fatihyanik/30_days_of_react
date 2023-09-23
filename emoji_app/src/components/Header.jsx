/* eslint-disable react/prop-types */
function Header({ setSearch, search }) {
  // Arama kutusundaki değer değiştiğinde tetiklenecek olan fonksiyon
  const changeHandler = (e) => {
    // Kullanıcının girdiği değeri setSearch fonksiyonu ile search state'ine ata
    setSearch(e.target.value);
  };

  return (
    <div className="header-div">
      {/* Başlık */}
      <h1 className="heading">😺 Emoji App 😺</h1>
      
      {/* Arama kutusu */}
      <input
        className="input-box"
        placeholder="Enter an emoji here"
        value={search}
        onChange={changeHandler}
      />
    </div>
  );
}

export default Header;
