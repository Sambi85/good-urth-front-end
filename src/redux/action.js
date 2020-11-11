export const getMarkets = (marketObj) => {
    return function (dispatch) {
        fetch('')
        .then(resp => resp.json())
        .then(data => dispatch({type: "fetched markets", payload: data}) )
    }
}