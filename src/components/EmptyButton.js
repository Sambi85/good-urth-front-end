import React from 'react';
import { Button, Confirm } from 'semantic-ui-react'

class EmptyButton extends React.Component {
    
    state = { open: false, result: '' }
    show = () => this.setState({ open: true })
    handleConfirm = () => this.setState({ result: 'Your Cart was emptied !', open: false })
    handleCancel = () => this.setState({ result: '', open: false })
  
  render() {
    const { open, result } = this.state
    return (
        <div>
            <p>
                 <em>{result}</em>
            </p>

            <Button color='red' onClick={this.show}>Empty Cart</Button>
        
            <Confirm
            open={open}
            header="You clicked on empty your cart !"
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
            />
      </div>
    )
  }
}

export default EmptyButton