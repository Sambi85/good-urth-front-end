import React from 'react';
import { Icon, Image, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Logo from '../Logo.png'

class NavBar extends React.Component {
    render() {
        return(  
                        <div className="header-div">
                            <Menu>
                            <Menu.Item position='left'>
                                <Image src={Logo}/>
                            </Menu.Item>
                                
                                {/* <Menu.Item position='center'>    
                                </Menu.Item> */}
                            
                                <Menu.Item position='right'>
                                    <NavLink to="/home" style={{"padding":"5px"}}><Icon name='home'/>
                                    </NavLink>
                                    <NavLink to="/explore" style={{"padding":"5px"}}><Icon name='compass outline'/>
                                    </NavLink>
                                    {/* <NavLink to='/markets' style={{"padding":"5px"}}><Icon name='map marker alternate'/> */}
                                    {/* </NavLink> */}
                                    {/* <NavLink to="/messages" style={{"padding":"5px"}}><Icon name='comment alternate outline'/> */}
                                    {/* </NavLink> */}
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