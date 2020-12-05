import React from 'react';
import { Icon, Menu} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return(  
                        <div className="header-div">
                            <Menu>
                                Good Urth Logo
                                <Menu.Item position='center'>
                                    
                                </Menu.Item>
                            
                                <Menu.Item position='right'>
                                    <NavLink to="/home" style={{"padding":"5px"}}><Icon name='home'/>
                                    </NavLink>
                                    <NavLink to="/messages" style={{"padding":"5px"}}><Icon name='comment alternate outline'/>
                                    </NavLink>
                                    <NavLink to="/explore" style={{"padding":"5px"}}><Icon name='compass outline'/>
                                    </NavLink>
                                    <NavLink to='/markets' style={{"padding":"5px"}}><Icon name='map marker alternate'/>
                                    </NavLink>
                                    <NavLink to='/orders' style={{"padding":"5px"}}><Icon name='envelope outline'/>
                                    </NavLink>
                                    <NavLink to='/settings' style={{"padding":"5px"}}><Icon name='setting'/>
                                    </NavLink>
                                    <NavLink to='/' style={{"padding":"5px"}}><Icon name='sign-out'/>
                                    </NavLink>
                                </Menu.Item>
                            </Menu>
                        </div>
        )
    }
}

export default NavBar; 