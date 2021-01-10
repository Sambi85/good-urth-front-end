import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

class OrderHistoryList extends React.Component {

    componentDidMount() {
        
        if (this.props.itemOrders.length){
            
            return (
                this.props.fetchItemOrders(),   
                this.props.fetchCurrentUser()
            )
        }
    }         
        
    render(){
            
        return (
                 <>
                    <Grid divided='vertically'>
                        <Grid.Row columns={1}>
                        
                         
                               
                            
                        </Grid.Row>
                    </Grid>
                </>
        )
    }
}

const msp = (state) => {
    return {
           itemOrders: state.itemOrders,
           currentUser: state.currentUser
      }
   }
  
  export default connect(msp,null)(withRouter(OrderHistoryList)); 
