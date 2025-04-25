import { useState } from 'react';
import './styles.css';

export default function App() {
  const [playerDistance, setPlayerDistance] = useState(100); // Distancia del jugador a la red
  const [netHeight, setNetHeight] = useState(2.24); // Altura de la red
  const [playerHeight, setPlayerHeight] = useState(1.75); // Altura del jugador
  const [jumpHeight, setJumpHeight] = useState(2); // Altura del salto del jugador
  const [ballAngle, setBallAngle] = useState(45); // Ángulo del lanzamiento

  const trajectoryPath = `M0,200 Q${playerDistance},${200 - jumpHeight * 50} 300,200`; // Trayectoria del balón

  return (
    <div className="main-container">
      <h1>Simulación de Ataque en Vóley</h1>

      <div>
        <label>Distancia del jugador a la red: {playerDistance}m</label>
        <input
          type="range"
          min="50"
          max="150"
          value={playerDistance}
          onChange={(e) => setPlayerDistance(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Altura de la red: {netHeight.toFixed(2)}m</label>
        <input
          type="range"
          min="2"
          max="2.6"
          step="0.01"
          value={netHeight}
          onChange={(e) => setNetHeight(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Altura del jugador: {playerHeight.toFixed(2)}m</label>
        <input
          type="range"
          min="1.5"
          max="2.1"
          step="0.01"
          value={playerHeight}
          onChange={(e) => setPlayerHeight(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Altura del salto: {jumpHeight.toFixed(2)}m</label>
        <input
          type="range"
          min="1.5"
          max="3"
          step="0.1"
          value={jumpHeight}
          onChange={(e) => setJumpHeight(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Ángulo de lanzamiento: {ballAngle}°</label>
        <input
          type="range"
          min="30"
          max="60"
          value={ballAngle}
          onChange={(e) => setBallAngle(Number(e.target.value))}
        />
      </div>

      <svg width="100%" height="400">
        {/* Red */}
        <line x1="300" y1={200 - netHeight * 50} x2="300" y2="400" stroke="black" strokeWidth="2" />
        <text x="310" y={200 - netHeight * 50} fontSize="14">Red</text>

        {/* Jugador */}
        <circle cx={playerDistance} cy={200 - playerHeight * 50} r="20" fill="blue" />
        <text x={playerDistance - 20} y={200 - playerHeight * 50 - 30} fontSize="14">Jugador</text>

        {/* Trayectoria del balón */}
        <path d={trajectoryPath} fill="none" stroke="red" strokeWidth="2" />
        <circle cx="0" cy="200" r="5" fill="green">
          <animateMotion dur="2s" repeatCount="indefinite">
            <mpath href="#trajectory" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}
