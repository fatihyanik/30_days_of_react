import Balls from './Balls'
import Header from './Header'

function Main() {
    return (
        <div style={{ minHeight: "100vh" }} className="container d-flex justify-content-center align-items-center flex-column">
            <Header />
            <Balls />
        </div>
    )
}

export default Main