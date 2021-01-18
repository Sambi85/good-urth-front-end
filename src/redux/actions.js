
export const getMarkets = (marketObj) => {
    // console.log("first dispatch invoked")
    return function (dispatch) {
        // console.log("nested function invoked")
        fetch('http://localhost:4000/markets')
        .then(resp => resp.json())

        .then(data => dispatch({type: "fetched markets", payload: data}) )
    }
}

export const getFarmers = (farmerObj) => {
    
    return function (dispatch) {
        
        fetch('http://localhost:4000/farmers')
        .then(resp => resp.json())
    
        .then(data => dispatch({type: "fetched farmers", payload: data}) )      
    }
}

export const getFarmerId  = (id, history) => {

    return function (dispatch) {
        dispatch({ type: "get farmer id", payload: id})
        history.push(`/farmers/${id}`)  

    }
}

export const getItemOrders = (itemOrderObj) => {
    
    return function (dispatch) {
        
        fetch('http://localhost:4000/item_orders')
        .then(resp => resp.json())
        
        .then(data => dispatch({type: "fetched itemOrders", payload: data}) )
    }
}

export const destroyItemOrder = (itemOrderId) => {

    return function (dispatch) {

        let options = { method: "DELETE" }
        
        fetch(`http://localhost:4000/item_orders/${itemOrderId}`, options)
        .then(resp => resp.json())
        .then(data => dispatch({type: "destroy itemOrder", payload: data}) )
    }
}

export const destroyTargetItemOrders = (idArray) => {

    return function (dispatch) {

        let options = { method: "DELETE", body: idArray }

        for (let id of idArray) {

            fetch(`http://localhost:4000/item_orders/${id}`, options)
            .then(resp => resp.json())
            .then(data => 
                dispatch({type: "destroy target itemOrders", payload: idArray}))
            .catch(error => {
                console.error('Error:', error);
            });
        }   
    }  
}

export const paidItemOrders = (idArray) => {

    return function (dispatch) {

        let options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },

            body: JSON.stringify({
                paid: true
            })
        }

        for (let id of idArray) {

            fetch(`http://localhost:4000/item_orders/${id}`, options)
            .then(resp => resp.json())
            .then(data => { console.log(data)
                dispatch({type: "paid itemOrders", payload: data})  })
            .catch(error => {
                console.error('Error:', error);
            });
        }        
    }
}

export const datePurchasedHandler = (idArray) => {

    return function (dispatch) {

    let options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        },

        body: JSON.stringify({
            date_purchased: new Date()
        })
    }

    for (let id of idArray) {

        fetch(`http://localhost:4000/item_orders/${id}`, options)
        .then(resp => resp.json())
        .then(data => { console.log(data)
            dispatch({type: "purchase_data", payload: data})  })
        .catch(error => {
            console.error('Error:', error);
        });
        }
    }        
}

export const getItems = (itemObj) => {

    return function (dispatch) {
        
        fetch('http://localhost:4000/items')
        .then(resp => resp.json())
        .then(data => dispatch({type: "fetched items", payload: data}) )
    }
}


export const getMessages = (messageObj) => {
 
    return function (dispatch) {
       
        fetch('http://localhost:4000/messages')
        .then(resp => resp.json())
        .then(data => dispatch({type: "fetched messages", payload: data}) )
    }
}

export const getOrders = (orderObj) => {
 
    return function (dispatch) {
   
        fetch('http://localhost:4000/orders')
        .then(resp => resp.json())   
        .then(data => dispatch({type: "fetched orders", payload: data}) )
    }
}

export const getReviews = (reviewObj) => {
    
    return function (dispatch) {
        
        fetch('http://localhost:4000/reviews')
        .then(resp => resp.json())
        .then(data => dispatch({type: "fetched reviews", payload: data}) )
    }
}

export const getSchedules = (scheduleObj) => {

    return function (dispatch) {

        fetch('http://localhost:4000/schedules')
        .then(resp => resp.json())
        .then(data => dispatch({type: "fetched schedules", payload: data}) )
    }
}

export const getUsers = (userObj) => {

    return function (dispatch) {
        
        fetch('http://localhost:4000/users/')
        .then(resp => resp.json())
        .then(data => dispatch({type: "fetched users", payload: data}) )
    }
}

export const getCurrentUser = (currentUserObj) => {

    return function (dispatch) {
    
    fetch('http://localhost:4000/users/3')
    .then(resp => resp.json())
    .then(data => dispatch({type: "fetched currentUser", payload: data}))
    } 
}

// Additional Actions // -------------------------------------

export const increment = (itemOrder) => {

    return { type: "increment itemOrder", payload: itemOrder }
}

export const decrement = (itemOrder) => {

    return { type: "decrement itemOrder", payload: itemOrder }
}

export const billTotalGrabber = (billTotal) => {
        
    return { type: 'billTotal', payload: billTotal }
}



