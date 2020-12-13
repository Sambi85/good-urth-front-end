
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

export const getFarmers = (farmerObj) => {
    // console.log("first dispatch invoked")
    return function (dispatch) {
        // console.log("nested function invoked")
        fetch('http://localhost:4000/farmers')
        .then(resp => resp.json())
        // .then(console.log)
        .then(data => dispatch({type: "fetched farmers", payload: data}) )      
    }
}

export const getItemOrders = (itemOrderObj) => {
    // console.log("first dispatch invoked")
    return function (dispatch) {
        // console.log("nested function invoked")
        fetch('http://localhost:4000/item_orders')
        .then(resp => resp.json())
        // .then(console.log)
        .then(data => dispatch({type: "fetched itemOrders", payload: data}) )
    }
}

export const getItems = (itemObj) => {
    // console.log("first dispatch invoked")
    return function (dispatch) {
        // console.log("nested function invoked")
        fetch('http://localhost:4000/items')
        .then(resp => resp.json())
        // .then(console.log)
        .then(data => dispatch({type: "fetched items", payload: data}) )
    }
}

export const getMessages = (messageObj) => {
    // console.log("first dispatch invoked")
    return function (dispatch) {
        // console.log("nested function invoked")
        fetch('http://localhost:4000/messages')
        .then(resp => resp.json())
        // .then(console.log)
        .then(data => dispatch({type: "fetched messages", payload: data}) )
    }
}

export const getOrders = (orderObj) => {
    // console.log("first dispatch invoked")
    return function (dispatch) {
        // console.log("nested function invoked")
        fetch('http://localhost:4000/orders')
        .then(resp => resp.json())
        // .then(console.log)
        .then(data => dispatch({type: "fetched orders", payload: data}) )
    }
}

export const getReviews = (reviewObj) => {
    // console.log("first dispatch invoked")
    return function (dispatch) {
        // console.log("nested function invoked")
        fetch('http://localhost:4000/reviews')
        .then(resp => resp.json())
        // .then(console.log)
        .then(data => dispatch({type: "fetched reviews", payload: data}) )
    }
}

export const getSchedules = (scheduleObj) => {
    // console.log("first dispatch invoked")
    return function (dispatch) {
        // console.log("nested function invoked")
        fetch('http://localhost:4000/schedules')
        .then(resp => resp.json())
        // .then(console.log)
        .then(data => dispatch({type: "fetched schedules", payload: data}) )
    }
}

export const getUsers = (userObj) => {
    // console.log("first dispatch invoked")
    return function (dispatch) {
        // console.log("nested function invoked")
        fetch('http://localhost:4000/users/')
        .then(resp => resp.json())
        // .then(console.log)
        .then(data => dispatch({type: "fetched users", payload: data}) )
    }
}

export const getCurrentUser = (currentUserObj) => {
    // console.log("first dispatch invoked")
    return function (dispatch) {
    // console.log("nested function invoked")
    fetch('http://localhost:4000/users/6')
    .then(resp => resp.json())
    // .then(console.log)
    .then(data => dispatch({type: "fetched currentUser", payload: data}))
    }
}