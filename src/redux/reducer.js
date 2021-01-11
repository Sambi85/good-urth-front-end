import { combineReducers } from 'redux'

let defaultState = {
    markets: [],
    schedules: [],
    farmers: [],
    farmerId: "",
    items: [],
    itemOrders: [],
    messages: [],
    orders: [],
    reviews: [],
    users: [],
    billTotal: [],
    currentUser: []
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

function getFarmerIdReducer(currentState = defaultState.farmerId, action) {

    switch (action.type) {
        case "get farmer id" :
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

        case "increment itemOrder" :

            let currentItemOrders = [...currentState]
            const itemIndex1 = currentItemOrders.indexOf(action.payload)
        
            currentItemOrders[itemIndex1].quantity = currentItemOrders[itemIndex1].quantity + 1     
            defaultState.itemOrders =  currentItemOrders
             
            return currentState
        
        case "decrement itemOrder" :
            
            let currentItemOrdersA = [...currentState]
            const itemIndex2 = currentItemOrdersA.indexOf(action.payload)
            
            currentItemOrdersA[itemIndex2].quantity = currentItemOrdersA[itemIndex2].quantity - 1 
            defaultState.itemOrders =  currentItemOrdersA
            
            return currentState

        case "paid itemOrders" : 
        
            let newArrayB = [...currentState]
            
                defaultState.itemOrders = action.payload
                currentState = defaultState.itemOrders
            
            return currentState

        case "purchase_data" : 
        
            let newArrayC = [...currentState]
            
                defaultState.itemOrders = action.payload
                currentState = defaultState.itemOrders
            
            return currentState
    
        case "destroy itemOrder" : 
        
            let newArray = [...currentState]
            let foundIndex = newArray.findIndex(element => element.id === action.payload)
            newArray.splice(foundIndex, 1) 
            defaultState.itemOrders = newArray
            currentState = defaultState.itemOrders
           
            return currentState

        case "destroy target itemOrders" : 
        
        let newArrayA = [...currentState]
        let idArray = action.payload
        for (let id of idArray) {
            let foundIndex = newArrayA.findIndex(element => element.id === id)
            newArrayA.splice(foundIndex, 1)
        }
            console.log(newArrayA)
            defaultState.itemOrders = newArrayA
            currentState = defaultState.itemOrders
        
        return currentState
                
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

function currentUserReducer(currentState = defaultState.currentUser, action) {
    switch (action.type) {
              
        case "fetched currentUser" :
            return action.payload
                
        default :
            return currentState
    }
}

function billTotalReducer (currentState = defaultState.billTotal, action) {
    switch (action.type) {
              
        case "billTotal" :

            let totalsContainer = [];
            
            defaultState.billTotal = totalsContainer.push(action.payload) 
            currentState = defaultState.billTotal

            return currentState
                
        default :
            return currentState
    }

}

const rootReducer = combineReducers({
    markets: marketReducer,
    schedules: scheduleReducer,
    farmers: farmerReducer,
    farmerId: getFarmerIdReducer,
    items: itemReducer,
    itemOrders: itemOrderReducer,
    messages: messageReducer,
    orders: orderReducer,
    reviews: reviewReducer,
    users: userReducer,
    currentUser: currentUserReducer,
    billTotal: billTotalReducer
})

export default rootReducer