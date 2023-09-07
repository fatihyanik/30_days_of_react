import  { useState } from "react";
import Ball from "./Ball";

function Balls() {
    const [ballsArray, setBallsArray] = useState([]);
    let luckies = [];

    function getLuckyNumbers() {
        const result = new Promise((resolve) => {


            function createRandomNumbers() {

                for (let i = 0; i < 7; i++) {
                    if (i === 6) {
                        luckies.push(Math.floor(Math.random() * 9 + 1));
                    } else {
                        luckies.push(Math.floor(Math.random() * 49 + 1));
                    }
                }

                for (let i = 0; i < 6; i++) {

                    for (let j = 0; j < i; j++) {

                        if (luckies[i] === luckies[j]) {
                            console.log("Repeated numbers");
                            luckies = [];
                            createRandomNumbers();
                        }
                    }
                }
            }

            createRandomNumbers();
            resolve(luckies);
        });

        result.then((data) => setBallsArray(data));
    }

    function resetNumbers() {

        luckies = [];
        setBallsArray(luckies);
    }

    return (
        <div className="mt-3 d-flex justify-content-center align-items-center flex-column">
            <div className="d-flex">
                {ballsArray.map((ball, index) => {
                    return (
                        <Ball key={index} ballNumber={index} number={ballsArray[index]} />
                    );
                })}
            </div>

            <div className="mt-3">
                <button onClick={resetNumbers} type="button" className="btn btn-outline-secondary">
                    Reset
                </button>
                <button
                    type="button"
                    className="btn  bg-secondary text-light mx-2"
                    onClick={getLuckyNumbers}
                >
                    Show me lucky numbers
                </button>
            </div>
        </div>
    );
}

export default Balls;