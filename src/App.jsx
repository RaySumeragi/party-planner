import { useState } from 'react'
import './App.css'
import RoomVisualization from './components/RoomVisualization'

function App() {
  const [roomWidth, setRoomWidth] = useState(10)
  const [roomLength, setRoomLength] = useState(15)
  const [layout, setLayout] = useState('klassisch')

  // Berechnung der maximalen Gästeanzahl (als Beispiel: 1 Person pro 1.5m²)
  const maxGuests = Math.floor((roomWidth * roomLength) / 1.5)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Party Planner</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Raumkonfiguration</h2>
          
          <div className="mb-4">
            <label className="block mb-2">Raumbreite (m)</label>
            <input
              type="number"
              value={roomWidth}
              onChange={(e) => setRoomWidth(Number(e.target.value))}
              className="w-full p-2 border rounded"
              min="5"
              max="50"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Raumlänge (m)</label>
            <input
              type="number"
              value={roomLength}
              onChange={(e) => setRoomLength(Number(e.target.value))}
              className="w-full p-2 border rounded"
              min="5"
              max="50"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2">Layout</label>
            <select
              value={layout}
              onChange={(e) => setLayout(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="klassisch">Klassisch</option>
              <option value="insel">Insel-Konzept</option>
              <option value="l-form">L-Form</option>
            </select>
          </div>
          
          <div className="mt-6 p-3 bg-blue-50 rounded">
            <p className="font-medium">Empfohlene maximale Gästeanzahl: {maxGuests}</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Raumvisualisierung</h2>
          
          <div className="room-container" style={{ height: '350px', padding: '20px' }}>
            <RoomVisualization
              width={roomWidth}
              length={roomLength}
              layout={layout}
              elements={[]}
            />
          </div>
          
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-gray-700">
              <strong>Hinweis:</strong> Die Raumdarstellung ist eine vereinfachte Visualisierung. 
              Alle Elemente sind proportional zur Raumgröße dargestellt.
            </p>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p>Klicken Sie auf die Elemente im Raum, um sie zu positionieren.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App