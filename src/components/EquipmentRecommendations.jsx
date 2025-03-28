import React from 'react';

const EquipmentRecommendations = () => {
  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Empfohlenes Equipment</h2>
      <p className="text-gray-500 mb-4">
        Wähle die Art der Party und die Anzahl der Gäste, um Empfehlungen zu erhalten.
      </p>
      
      {/* Beispiel für Equipment-Liste */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border p-3 rounded">
          <h3 className="font-medium">Sitzgelegenheiten</h3>
          <p className="text-sm text-gray-600">Vorschläge werden hier angezeigt</p>
        </div>
        <div className="border p-3 rounded">
          <h3 className="font-medium">Tische</h3>
          <p className="text-sm text-gray-600">Vorschläge werden hier angezeigt</p>
        </div>
        <div className="border p-3 rounded">
          <h3 className="font-medium">Sound-Equipment</h3>
          <p className="text-sm text-gray-600">Vorschläge werden hier angezeigt</p>
        </div>
        <div className="border p-3 rounded">
          <h3 className="font-medium">Beleuchtung</h3>
          <p className="text-sm text-gray-600">Vorschläge werden hier angezeigt</p>
        </div>
        <div className="border p-3 rounded">
          <h3 className="font-medium">Dekoration</h3>
          <p className="text-sm text-gray-600">Vorschläge werden hier angezeigt</p>
        </div>
        <div className="border p-3 rounded">
          <h3 className="font-medium">Catering-Bedarf</h3>
          <p className="text-sm text-gray-600">Vorschläge werden hier angezeigt</p>
        </div>
      </div>
    </div>
  );
};

export default EquipmentRecommendations;