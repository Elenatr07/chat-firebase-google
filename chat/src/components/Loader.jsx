import React from 'react';
import { Container, Grid } from '@material-ui/core';


const Loader = () => {
    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 50 }}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid
                    container
                    alignItems={'center'}
                    direction={'column'} >

                    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                </Grid>

            </Grid>

        </Container >
    );
};

export default Loader;
