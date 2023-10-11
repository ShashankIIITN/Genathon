import React, { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar.js';
import Tabs from './components/Tabs';

const demoChatData =
  [{
    "me": "Hii",
    "bot": "hello! i am botalina",
  },
  {
    "me": "how can you help me?",
    "bot": "i can provide information or assistance on a variety of topics",
  },
  {
    "me": "what kind of information?",
    "bot": "anykind you just have to ask"
  }
  ]
  
  function App() {
    const [ChatData, setChatData] = useState(demoChatData)

    useEffect(() => {
      setChatData(demoChatData);
      
    }, [])
    const navdata = {
    name: "ChatBot",
  }
  const URL = "http://localhost:5000/"
  const FetchData = async () => {
    const data = await fetch(`${URL + 'ask'}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
    );

    let GotData = data.json();
    console.log(GotData);
  }
  return (
    <>
      <Navbar data={navdata} />
      <div className="App">
        <Tabs chatdata = {ChatData} />
      </div>
    </>
  );
}

export default App;
