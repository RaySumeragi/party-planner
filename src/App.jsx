import { useState } from 'react'
import './App.css'
import RoomVisualization from './components/RoomVisualization'

function App() {
  const [roomWidth, setRoomWidth] = useState(10)
  const [roomLength, setRoomLength] = useState(15)
  const [layout, setLayout] = useState('klassisch')

  // Berechnung der maximalen Gästeanzahl
  const maxGuests = Math.floor((roomWidth * roomLength) / 1.5)

  // Dimension-Input mit +/- Buttons
  const DimensionInput = ({ label, value, setValue, unit }) => {
    return (
      <div className="form-group">
        <label className="form-label">{label}</label>
        <div className="input-group">
          <button 
            onClick={() => setValue(Math.max(5, value - 1))}
            className="btn btn-primary btn-minus"
          >
            -
          </button>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="input input-number"
            min="5"
            max="50"
          />
          <button 
            onClick={() => setValue(Math.min(50, value + 1))}
            className="btn btn-primary btn-plus"
          >
            +
          </button>
          <span className="input-unit">{unit}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      <div className="container">
        <h1 className="heading-primary">Party Planner</h1>
        
        <div className="main-layout">
          {/* Konfigurationsbereich */}
          <div className="card sidebar">
            <h2 className="heading-section">Raumkonfiguration</h2>
            
            <DimensionInput 
              label="Länge" 
              value={roomLength} 
              setValue={setRoomLength} 
              unit="m"
            />
            
            <DimensionInput 
              label="Breite" 
              value={roomWidth} 
              setValue={setRoomWidth} 
              unit="m"
            />
            
            <div className="form-group">
              <label className="form-label">Fläche</label>
              <div className="display-value">
                {roomWidth * roomLength} m²
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Layout</label>
              <select
                value={layout}
                onChange={(e) => setLayout(e.target.value)}
                className="select"
              >
                <option value="klassisch">Klassisch</option>
                <option value="insel">Insel-Konzept</option>
                <option value="l-form">L-Form</option>
              </select>
            </div>
            
            <div className="info-panel">
              <h3 className="info-title">Kapazität</h3>
              <p className="info-value">
                <span className="info-value-highlight">{maxGuests}</span> Personen
              </p>
              <p className="info-description">Basierend auf 1,5m² pro Person</p>
            </div>
          </div>
          
          {/* Visualisierungsbereich */}
          <div className="card content">
            <h2 className="heading-section">Raumvisualisierung</h2>
            
            <div className="room-container">
              <RoomVisualization
                width={roomWidth}
                length={roomLength}
                layout={layout}
              />
            </div>
            
            <div className="legend">
              <div className="legend-item">
                <div className="legend-color legend-stage"></div>
                <span className="legend-text">Bühne</span>
              </div>
              
              <div className="legend-item">
                <div className="legend-color legend-dancefloor"></div>
                <span className="legend-text">Tanzfläche</span>
              </div>
              
              <div className="legend-item">
                <div className="legend-color legend-dj"></div>
                <span className="legend-text">DJ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App