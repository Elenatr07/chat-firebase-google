import { Box, Button, Container, Grid } from '@material-ui/core';
import React from 'react';

const Login = () => {
    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 50 }}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid style={{ width: 400, background: '#3f51b5' }}
                    container
                    alignItems={'center'}
                    direction={'column'} >
                    <Box p={5}>
                        <Button variant="contained" color="primary">Login with Google</Button>
                    </Box>

                </Grid>

            </Grid>

        </Container >
    );
};

export default Login;