import React from 'react';
import { Button, Confirm } from 'semantic-ui-react'

class ConfirmButton extends React.Component {
    
    state = { open: false, result: '' }
    show = () => this.setState({ open: true })
    handleConfirm = () => this.setState({ result: 'Thanks for Shopping !', open: false })
    handleCancel = () => this.setState({ result: '', open: false })
  
  render() {
    const { open, result } = this.state
    return (
        <div>
            <p>
                 <em>{result}</em>
            </p>

            <Button color='green' onClick={this.show}>Confirm Cart</Button>
        
            <Confirm
            open={open}
            header="You clicked on check out !"
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm, this.props.confirmCartHandler}
            />
      </div>
    )
  }
}

export default ConfirmButton