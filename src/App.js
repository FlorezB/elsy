import React from "react";
import './App.css';
import './styles/global.css'
import Box from './components/Box'

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid" >
        <div className="row">


          {/* Water */}
          <Box icon="local_drink" value={1.5} color="#3A85FF" unit ="L"/>

          {/* Steps */}
          <Box icon="directions_walk" value={3000} color="black" unit ="steps"/>

          {/* Heart */}
          <Box icon="favorite" value={120} color="red" unit ="bpm"/>

          {/* Temperature */}
          <Box icon="wb_sunny" value={-10} color="yellow" unit ="°C"/>
        </div>
      </div>
    );
  }
}

export default App;




{/* <p> Heart = 80</p>
          <p> Temperature = -20</p>
          <p> Steps = 0</p> */}