import React from 'react';
import { connect } from 'react-redux'
import { getItems } from '../redux/actions'
import { Grid } from 'semantic-ui-react'
import ItemCard from '../cards/ItemCard.js'

class ItemsList extends React.Component {


    componentDidMount() {
        
        return (
                this.props.fetchItems()       
        )
    }

    itemsIterator = () => {

        let filteredItems = this.props.items.filter(element => element.farmer_id === parseInt(this.props.id))
        
        return filteredItems.map(element => <ItemCard key={element.id} item={element}/>)
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
   
const mdp = (dispatch) => {
   return {
        fetchItems: () => dispatch(getItems())
      }
   }
   
export default connect(msp, mdp)(ItemsList); 