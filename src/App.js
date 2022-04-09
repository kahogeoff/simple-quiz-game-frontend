import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import Systems from "./systems"
import GameParameters from "./components/game_parameters";

import "./index.css"

class App extends PureComponent {
  render() {
    return (
      <GameEngine
        style={{ 
          position: "absolute",
          top: 0, 
          left: 0, 
          bottom: 0,
          right: 0,
          overflow: "clip",
          backgroundColor: "#004282" 
        }}
        systems={Systems}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.

          // Initial entities
          // correct_counter: { fontSize: 30, renderer: <CounterText />},
          // wrong_counter: { fontSize: 30, renderer: <CounterText />},
          game_parameters: GameParameters
        }}>

      </GameEngine>
    );
  }
}

export default App;
