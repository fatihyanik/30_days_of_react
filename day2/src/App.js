import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const [items, setItems] = useState([
    { id:"a", value:"apple" },
    { id:"o", value:"orange" },
    { id:"g", value:"grape" },
    { id:"p", value:"pear" },
  ]);

  useEffect(()=>{
    const interval= setInterval(()=>{
      setItems(dondur(items))
    },1000);
    return ()=> clearInterval(interval)
  },[items])

  return (
    <div>

      <div>
        <h1>Without Key</h1>
          {items.map((item)=>(
            <input value={item.value} />
          ))}
      </div>

      <div>
        <h1>With Key as Index</h1>
        {items.map((item, index)=>(
            <input key={index} value={item.value} />
          ))}
      </div>

      <div>
        <h1>With Key</h1>
        {items.map((item)=>(
            <input key={item.id} value={item.value} />
          ))}
      </div>

    </div>
  );
}

function dondur(originalArray){
  const array =[...originalArray];
  let currentIndex = array.length;
  let geciciDeger;
  let randomIndex;

  while(0 !== currentIndex){
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -=1;

    geciciDeger = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = geciciDeger
  }
  return array;
}

export default App;
