import {puppyList} from './data.js'
import {useState} from 'react'
import './App.css'
import './index.css'

// Define the main App component
function App() {
  // Initialize the 'puppies' state variable with the puppyList data
  const [puppies, setPuppies] = useState(puppyList);

  // Initialize the 'featPupId' state variable as null
  const [featPupId, setFeatPupId] = useState(null);

  // Find the featured puppy using its ID fro the 'puppies' array
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  // Log the featured puppy to the console
  console.log(featuredPup);

  return (
    // Render the main container for the application
    <div className="app-container">
      <div className="puppy-list">
        {puppies.map((puppy) => {
          return (
            <p onClick={()=> (setFeatPupId(puppy.id))} key={puppy.id}>{puppy.name}</p>
        );
      })}
      </div>
      

      {featPupId && (
        <div className="featured-puppy">
          <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
        </div>
      )}
    </div>
  );
}

export default App;