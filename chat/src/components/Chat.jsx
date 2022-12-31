import React from 'react';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';
import { Container, Grid, Button, TextField } from '@material-ui/core';


const Chat = () => {
    const { auth, firestore } = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <Container>
            <Grid container
                justifyContent={'center'}
                style={{ height: window.innerHeight - 50, marginTop: 20 }}>
                <div style={{ width: '80%', height: '60vh', border: '1px solid #3f51b5', overflow: 'auto' }}>
                </div>
                <Grid
                    container
                    justifyContent={'center'}
                    alignItems={'center'}
                    style={{ width: '80%' }}
                >
                    <TextField
                        id="outlined-basic" label="Your message" variant="outlined"
                        maxRows={2}
                        style={{ width: '80%' }}
                    />
                    <Button variant="contained" color="primary" style={{ width: '20%', height: '55px' }}>Send</Button>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Chat;