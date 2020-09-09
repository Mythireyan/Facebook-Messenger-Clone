import React,{ useState, useEffect } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input , setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');  

  //useState = variable in react
  //useEffect = run code on a condition in react

  useEffect(()=>{
    //run once when the app component loads
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=> ({id:doc.id, message:doc.data()})))
    })
  },[]);

  useEffect(()=>{
    // const username = prompt('Please enter your username')
    setUsername(prompt('Please enter your username'))
  },[])//condition  

  const sendMessage = (event)=>{
    // all the logic to send messages goes here.
    event.preventDefault();

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100" alt="messenger logo"/>
      <h1>Facebook Messenger Clone</h1>
      <h2>Welcome {username}</h2>
      <form className = "app__form">
        <FormControl className="app__formControl">
            <Input className="app__input" placeholder="Enter a message..." id="my-input" aria-describedby="my-helper-text" value={ input } onChange={event => setInput(event.target.value)}/>
            <IconButton className="app__iconButton" disabled={!input} variant='contained' color='primary' type='submit' onClick = {sendMessage}>      
                <SendIcon/>
            </IconButton>
        </FormControl> 
      </form>   
      <FlipMove>
        {
          messages.map(({id, message})=>(
               <Message key={id} username={username} message={message}/>
            ))
        }
      </FlipMove>
      

      {/*
        input field
        send button
        messeges themselves
      */}
    </div>
  );
}

export default App;
