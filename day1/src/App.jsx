import team from "./team.js";

function App() {
  return (
    <>
      {team.map((element) => {
        return(
        // eslint-disable-next-line react/jsx-key
        <div>
          <p>name : {element.name}</p>
          <p>age : {element.age}</p>
          <p>city : {element.live}</p>
        </div>);
      })}
    </>
  );
}

export default App;