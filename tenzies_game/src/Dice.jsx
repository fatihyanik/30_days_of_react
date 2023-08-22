/* eslint-disable react/prop-types */
const Dice = ({ value, isHeld, holdDice }) => {
    // Zarın durumuna göre arka plan rengini belirleyen stilleri oluştur
    const diceStyles = {
        backgroundColor: isHeld ? "#59E391" : "#fff"
    };

    return (
        // Zarı temsil eden bileşen
        <div className="die-face" style={diceStyles} onClick={holdDice}>
            <h2>{value}</h2> {/* Zarın değerini gösteren başlık */}
        </div>
    );
};

export default Dice;
