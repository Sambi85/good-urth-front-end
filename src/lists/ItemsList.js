import React from 'react';
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import ItemCard from '../cards/ItemCard.js'

class ItemsList extends React.Component {

    itemsIterator = () => {

        let filteredItems = this.props.items.filter(element => element.farmer_id === parseInt(this.props.id))
        
        return filteredItems.map(element => <ItemCard key={element.id} id={element.id}/>)
    }
    
    render(){
        
        return(
                <>
                   <Grid container columns={4}>
                        {this.itemsIterator()}
                    </Grid>
                </>
        )
    }   
}

const msp = (state) => {
    return {
        items: state.items
      }
   }
   
   
export default connect(msp, null)(ItemsList); 