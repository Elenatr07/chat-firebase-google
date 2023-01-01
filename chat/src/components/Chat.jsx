import React from 'react';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';
import { Container, Grid, Button, TextField, Avatar } from '@material-ui/core';
import { useState } from 'react';

import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loader from './Loader';
import firebase from 'firebase';




const Chat = () => {
    const { auth, firestore } = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()

        })
        setValue('')
    }
    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <Grid container
                justifyContent={'center'}
                style={{ height: window.innerHeight - 50, marginTop: 20 }}

            >
                <div style={{ width: '80%', height: '60vh', border: '1px solid #3f51b5', overflow: 'auto' }}>
                    {messages.map(message =>
                        <div style={{
                            margin: 10,
                            border: user.uid === message.uid ? '2px solid red' : '2px solid #3f51b5',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            backgroundColor: user.uid === message.uid ? 'lightpink' : '#cfe8fc',
                            width: 'fit-content',
                            borderRadius: '25% 10%',
                            padding: '5px'


                        }}>
                            <Grid container>
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div>

                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
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
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button onClick={sendMessage}
                        variant="contained"
                        color="primary"
                        style={{ width: '20%', height: '55px' }}>
                        Send</Button>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Chat;