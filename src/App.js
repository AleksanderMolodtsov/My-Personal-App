import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://my-personal-app-e3666-default-rtdb.europe-west1.firebasedatabase.app/test.json')
      const data = await  response.json()

      console.log(data,'data')
    }

    fetchData();
  }, [])

  const onClick = async () => {
    const data = {test:'fuuuuuck'};
    const response = await fetch('https://my-personal-app-e3666-default-rtdb.europe-west1.firebasedatabase.app/.json', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    const dataFromResponse = await response.json()

    console.log('dataFromResponse', dataFromResponse)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>My first pull request! MTFKR</p>
        <button onClick={onClick}>change data</button>
      </header>
    </div>
  );
}

export default App;
