import styles from './index.module.css'
import sqlLogo from './assets/sql-symbol.png'
import { useState } from 'react'


function App() {
  const [queryDescription, setQueryDescription] = useState('');
  const [sqlQuery, setSqlQuery] = useState('');  

  const onSubmit = async(e) =>{
    e.preventDefault();
    console.log(queryDescription);
    
    const query = await generateQuery(); // will wait for generateQuery() to respond back with ans and store in query
    setSqlQuery(query); // set to state variable

  }

  const generateQuery = async() =>{  // Respond the server with the query
    const response = await fetch("http://localhost:3007/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({queryDescription: queryDescription})
    });

    const data = await response.json(); // Wait for async response to come back from server
    return data.answer;
  }

  return (
    <main className={styles.main}>
      <img src={sqlLogo} className={styles.icon}></img>
      <h3>Chat my Database</h3>
      <form onSubmit={onSubmit}>
        <input type="text"
          name="query-description"
          placeholder='What question do you want answered?' onChange={(e) =>{setQueryDescription(e.target.value)}}/>

        <input type="submit" value="Generate Answer" />
      </form>
      {sqlQuery && <div className={styles.queryOutput}>
        {sqlQuery}
      </div>}
    </main>
    

  )
}

export default App
