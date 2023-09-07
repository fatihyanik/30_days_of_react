import Balls from "./components/Balls"
import Header from "./components/Header"


function App() {
  return (
    <div style={{ minHeight: "100vh" }} className="container d-flex justify-content-center align-items-center flex-column">
      <Header />
      <Balls />
    </div>
  )
}

export default App