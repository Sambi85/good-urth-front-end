import React from 'react';
import { connect } from 'react-redux'

class HomeContainer extends React.Component {

    render(){
        return (
            <>HomeContainer</>
        )
    }

}

 const msp = (state) => {
 console.log("current Redux state:", state)
 return {}
}

export default connect(msp)(HomeContainer)