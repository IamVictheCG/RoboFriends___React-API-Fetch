import { useState, useEffect } from 'react';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
// import ErrorHanddler from './components/ErrorHanddler';
// import ErrorHanddler2 from './components/ErrorHanddler2';


function App() {
  const [searchInput, setSearchInput] = useState('');
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  function updateSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function filteredRobots(arr) {
    // do something to filter
    const newRobots = robots.filter(item => (
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    ));
    return newRobots;
  }

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      setLoading(false)
      if(!response.ok) {
        throw Error("Something has gone wrong")
      }
      return response.json()
      // console.log(Error)
      // console.log(response)
    })
    .then(json => {
      setRobots(json);
      // setLoading(true);
      setError(null)
    })
    .catch((err) => {
      setError(err.message)
      console.log(err.message)
      setLoading(false);
    })
  },[]);
  
  return (
    <div>
      <h1 style={{ textAlign: 'center'}}>Robofriends </h1>
      <SearchBox updateSearchInput={updateSearchInput}/>
      {error && <h2 style = {color}>{error}</h2>}
      {loading && <h1 style={{ textAlign: 'center'}}>Loading...</h1>}
      {!robots.length && loading && <h3 style={{ textAlign: 'center'}}>no result found</h3>}
      {/* <ErrorHanddler2> */}
      <CardList clients={filteredRobots(robots)}/>
      {/* </ErrorHanddler2> */}
    </div>
  )
}

const color = {
  color: "red",
  textAlign: 'center'
}


export default App;