import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Canvas from './Canvas'
import './Styles.css';
import './App.css';

function App() {
  return (
      <div className="bigContainer">
        <div className="subContainer">
          <Canvas />
        </div>
        <FontAwesomeIcon icon={faGithubSquare} />
      </div>
  )
}

export default App;
