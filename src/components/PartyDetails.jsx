import React from 'react';

const PartyDetails = ({ roomArea }) => {
  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Party Details</h2>
      
      {/* Party-Typ Auswahl */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Art der Party</label>
        <select className="w-full p-2 border border-gray-300 rounded">
          <option value="birthday">Geburtstagsfeier</option>
          <option value="wedding">Hochzeit</option>
          <option value="corporate">Firmenfeier</option>
          <option value="casual">Casual Get-Together</option>
          <option value="theme">Themenparty</option>
        </select>
      </div>
      
      {/* Anzahl der Gäste */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Anzahl der Gäste</label>
        <input 
          type="number" 
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="z.B. 50"
          min="1"
        />
        <p className="text-sm text-gray-500 mt-1">
          Empfohlene Fläche pro Person: 1.5-2 m² (Für {roomArea} m² werden ca. {Math.floor(roomArea / 1.5)}-{Math.floor(roomArea / 2)} Gäste empfohlen)
        </p>
      </div>
    </div>
  );
};

export default PartyDetails;