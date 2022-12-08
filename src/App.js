import React, { useEffect, useState } from 'react';
import './App.css';
// Components
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
// Libraries
// Styling
import 'tachyons';
// MOck data
// import { robotsData } from './robots';


const App = ({ store }) => {
  // State
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  // useEffect
  useEffect(() => {
    // setRobots(robotsData);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setRobots(users))
  }, []);
  // Manage search input
  const onSearchChange = (e) => {
    setSearchfield(e.target.value);
  };
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  // Jsx
  if(robots.length === 0) {
    return <h1 style={{ textAlign: 'center' }}>Loading</h1>
  } else {
    return (
      // Start of app UI
      <div className="App">
        {/* App title */}
        <h1>RoboFriends</h1>
        {/* Searchbar component */}
        <SearchBar searchChange={onSearchChange} />
        {/* Cardlist component */}
        <CardList robots={filteredRobots} />
      </div>
      // End of app UI
    );
  }
};
export default App;