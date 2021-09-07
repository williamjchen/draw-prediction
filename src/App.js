import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Icon from './components/Icon'
import Canvas from './Canvas'
import Prediction from './Prediction';
import './Styles.css';
import './App.css';

function App() {
  return (
      <div className="bigContainer">
        <div className="subContainer">
          <Canvas />
          <Prediction />
        </div>
        <a href="https://github.com/williamjchen/draw-prediction" target="_blank">
          <Icon>
            <FontAwesomeIcon icon={faGithubSquare} />
          </Icon>
        </a>
      </div>
  )
}

export default App;
