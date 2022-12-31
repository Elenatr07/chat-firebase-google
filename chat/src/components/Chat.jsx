import React from 'react';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';
import { Container, Grid, Button, TextField, Avatar } from '@material-ui/core';
import { useState } from 'react';
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loader from './Loader';


const Chat = () => {
    const { auth, firestore } = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            cteatedAt: firebase.firestore.FieldValue.serverTimestamp()
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
                style={{ height: window.innerHeight - 50, marginTop: 20 }}>
                <div style={{ width: '80%', height: '60vh', border: '1px solid #3f51b5', overflow: 'auto' }}>
                    {messages.map(message =>
                        <div>
                            <Grid container>
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div>

                            </Grid>
                            <div> {message.text}текст сообщения</div>
                        </div>)}
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