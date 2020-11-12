
export const getMarkets = (marketObj) => {
    // console.log("first dispatch invoked")
    return function (dispatch) {
        // console.log("nested function invoked")
        fetch('http://localhost:4000/markets')
        .then(resp => resp.json())
        // .then(console.log)
        .then(data => dispatch({type: "fetched markets", payload: data}) )
    }
}