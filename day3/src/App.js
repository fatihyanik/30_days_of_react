import './App.css';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleClick = () => setInputValue("")
  const handleH2MouseOver = () => console.log(inputValue);
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleInputFocus = () => setIsInputFocused(true);
  const handleInputBlur = () => setIsInputFocused(false);

  return (
    <div className="App">
      <h1 onClick={handleClick}>Click me to clear the input</h1>
      <h2 onMouseOver={handleH2MouseOver}>Hover me to log what is in the input to the console</h2>
      <input
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus} 
        onBlur={handleInputBlur} 
        placeholder="type something here to show in the box below" 
      />

      <br />
      <br />

      <div>
        {/* when the input is focused a message should be rendered : "user typing ..." */}
        {isInputFocused ? "user typing...." : null}
      </div>

      <div>
        {/* the input value should show here 
            if the input is empty show a message :"nothig to show!"
        */}

        {inputValue ? inputValue : "Nothing to show here!"}
      </div>
    </div>
  );
}

export default App;
