import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';


const Navbar = () => {
    const user = false
    return (
        <AppBar position="static">
            <Toolbar variant={'dense'}>
                <Grid container justifyContent={'flex-end'}>
                    {user ?
                        <Button variant="contained" color="primary">Logout</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant="contained" color="primary">Login</Button>
                        </NavLink>

                    }
                </Grid>

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;