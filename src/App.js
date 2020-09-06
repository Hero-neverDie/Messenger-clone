import React ,{useState, useEffect}from 'react';
import { Button,FormControl,InputLabel,Input  } from '@material-ui/core';
import './App.css';
import Message from "./Message"
import  db  from './firebase';
import firebase from "firebase"
import FlipMove from "react-flip-move"
import Sendicon from "@material-ui/icons/Send"
import IconButton from '@material-ui/core/IconButton'
function App() {

  const [input, setInput] =useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');



  //useState = variable in react
  //useEffect = run code on a condition in react


  useEffect(()=>{
    console.log("heree")
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {

      setMessages(snapshot.docs.map(doc=>({message:doc.data(),id:doc.id})))
    })
  },[])

  useEffect(() => {
      setUsername(prompt("please enter your name"))
  }, [])


  const sendMessage = (event) => {
    event.preventDefault();
  
    db.collection('messages').add({
      message:input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }

  return (
    <div className="App">
      
      <form>
        <h1>-----Chat room-----</h1>
        <h2>Hello {username}</h2>

        <form className="app__form">
          <FormControl className="app__formControl">
            <Input className="app__input" placeholder="Enter a message" value={input} onChange={event=> setInput(event.target.value)}/>
            <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" onClick={sendMessage}>
              <Sendicon/>
            </IconButton>
          </FormControl>
        </form>

      
      </form>
      <FlipMove>
        {
          messages.map(({id,message}) =>(
            <Message key={id} username={username} message={message}></Message>
            ))
        }
      </FlipMove>
    </div>

  );
}

export default App;
