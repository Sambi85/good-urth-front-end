import React from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../redux/actions'
import store from '../redux/store';

// Material UI 
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(0),
      },
      flexGrow: 1,
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
      paper: {
        padding: theme.spacing(10),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));
  
  class Dashboard extends React.Component {
      
    componentDidMount() {
          this.props.fetchUsers()
        }
        
    
    render() {
        // console.log(store.getState().users[0])
        return (
                <>
                    <Grid container direction="row"
                                    justify="center"
                                    alignItems="center"
                    >
                <Grid item xs={3}>  
                        <Avatar alt={store.getState().users[0].username} 
                                src={store.getState().users[0].avatar} 
                                // className={useStyles.large}
                                style={{ height: '200px', width: '200px' }}
                        />
                        
                        
                </Grid>
                <Grid item xs={3}>  
                
                            <h1>{store.getState().users[0].username}</h1>
                            <h4>{store.getState().users[0].bio}</h4>
            
                </Grid>
                </Grid>


                </>
        )
    }
}

const msp = (state) => {
    // console.log("current Redux state:", state)
    return {
           users: state.users
       }
   }
   
   const mdp = (dispatch) => {
   return {
       fetchUsers: () => dispatch(getUsers())
       }
   }
   
export default connect(msp, mdp)(Dashboard); 
