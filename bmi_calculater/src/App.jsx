import './index.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form>
          <div>
            <label>Weight</label>
            <input />
          </div>
          <div>
            <label>Height</label>
            <input/>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit">
              Reload
            </button>
          </div>
        </form>
        <div className="center">
          <h3>Your BMI is: </h3>
          <p></p>
        </div>
        <div className="img-container">
          <img src="" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
