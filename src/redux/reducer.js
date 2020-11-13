import { combineReducers } from 'redux'

let defaultState = {
    markets: [],
    schedules: [],
    farmers: [],
    items: [],
    itemOrders: [],
    messages: [],
    orders: [],
    reviews: [],
    users: []
}

function marketReducer(currentState = defaultState.markets, action) {
    switch (action.type) {
              
        case "fetched markets" :
            return action.payload
                
        default :
            return currentState
    }
}

function scheduleReducer(currentState = defaultState.schedules, action) {
    switch (action.type) {
              
        case "fetched schedules" :
            return action.payload
                
        default :
            return currentState
    }
}

function farmerReducer(currentState = defaultState.farmers, action) {
    switch (action.type) {
              
        case "fetched farmers" :
            return action.payload
                
        default :
            return currentState
    }
}

function itemReducer(currentState = defaultState.items, action) {
    switch (action.type) {
              
        case "fetched items" :
            return action.payload
                
        default :
            return currentState
    }
}

function itemOrderReducer(currentState = defaultState.itemOrders, action) {
    switch (action.type) {
              
        case "fetched itemOrders" :
            return action.payload
                
        default :
            return currentState
    }
}

function messageReducer(currentState = defaultState.messages, action) {
    switch (action.type) {
              
        case "fetched messages" :
            return action.payload
                
        default :
            return currentState
    }
}

function orderReducer(currentState = defaultState.orders, action) {
    switch (action.type) {
              
        case "fetched orders" :
            return action.payload
                
        default :
            return currentState
    }
}

function reviewReducer(currentState = defaultState.reviews, action) {
    switch (action.type) {
              
        case "fetched reviews" :
            return action.payload
                
        default :
            return currentState
    }
}

function userReducer(currentState = defaultState.users, action) {
    switch (action.type) {
              
        case "fetched users" :
            return action.payload
                
        default :
            return currentState
    }
}

const rootReducer = combineReducers({
    markets: marketReducer,
    schedules: scheduleReducer,
    farmers: farmerReducer,
    items: itemReducer,
    itemOrders: itemOrderReducer,
    messages: messageReducer,
    orders: orderReducer,
    reviews: reviewReducer,
    users: userReducer
})

export default rootReducer