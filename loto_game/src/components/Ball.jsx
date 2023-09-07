function Ball({ number, ballNumber }) {
    return (
        <div style={{ width: "60px", height: "60px" }} className={`d-flex justify-content-center align-items-center border border-info rounded-circle mx-2 ${ballNumber === 6 ? "bg-info" : null}`}>
            {number}
        </div>
    )
}

export default Ball