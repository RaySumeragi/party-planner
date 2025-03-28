import React from 'react';

const RoomConfiguration = ({
  layoutStyle,
  setLayoutStyle,
  hasStage,
  setHasStage,
  stagePosition,
  setStagePosition,
  hasDJ,
  setHasDJ,
  djPosition,
  setDjPosition,
  hasDanceArea,
  setHasDanceArea,
  danceAreaSize,
  setDanceAreaSize,
  seatingPercentage,
  setSeatingPercentage
}) => {
  return (
    <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Raumkonfiguration</h2>
      
      {/* Ausrichtungsoptionen */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Raumausrichtung</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div 
            className={`border p-2 rounded cursor-pointer text-center ${layoutStyle === 'classic' ? 'bg-blue-100 border-blue-500' : 'bg-gray-50'}`}
            onClick={() => setLayoutStyle('classic')}
          >
            <div className="text-sm font-medium">1. Klassisch</div>
            <div className="text-xs text-gray-500">Bühne vorne, Tanzfläche davor</div>
          </div>
          <div 
            className={`border p-2 rounded cursor-pointer text-center ${layoutStyle === 'island' ? 'bg-blue-100 border-blue-500' : 'bg-gray-50'}`}
            onClick={() => setLayoutStyle('island')}
          >
            <div className="text-sm font-medium">2. Insel-Konzept</div>
            <div className="text-xs text-gray-500">DJ/Tanzfläche zentral</div>
          </div>
          <div 
            className={`border p-2 rounded cursor-pointer text-center ${layoutStyle === 'l-shape' ? 'bg-blue-100 border-blue-500' : 'bg-gray-50'}`}
            onClick={() => setLayoutStyle('l-shape')}
          >
            <div className="text-sm font-medium">3. L-Form</div>
            <div className="text-xs text-gray-500">Bühne seitlich, Tanzfläche im Eck</div>
          </div>
          <div 
            className={`border p-2 rounded cursor-pointer text-center ${layoutStyle === 'lounge' ? 'bg-blue-100 border-blue-500' : 'bg-gray-50'}`}
            onClick={() => setLayoutStyle('lounge')}
          >
            <div className="text-sm font-medium">4. Lounge-Style</div>
            <div className="text-xs text-gray-500">Gäste in kleinen Gruppen</div>
          </div>
          <div 
            className={`border p-2 rounded cursor-pointer text-center ${layoutStyle === 'theater' ? 'bg-blue-100 border-blue-500' : 'bg-gray-50'}`}
            onClick={() => setLayoutStyle('theater')}
          >
            <div className="text-sm font-medium">5. Theater-Stil</div>
            <div className="text-xs text-gray-500">Bühne im Fokus, wenig Tanzfläche</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bühne Konfiguration */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Bühne</label>
          <div className="flex items-center mb-2">
            <input 
              type="checkbox" 
              id="hasStage" 
              className="mr-2"
              checked={hasStage}
              onChange={(e) => setHasStage(e.target.checked)}
            />
            <label htmlFor="hasStage">Bühne einplanen</label>
          </div>
          
          {hasStage && (
            <div className="ml-6">
              <label className="block text-gray-700 mb-2 text-sm">Bühnenposition</label>
              <div className="grid grid-cols-3 gap-1 mb-3 max-w-xs">
                <div className="h-10 col-start-2">
                  <button 
                    className={`w-full h-full border ${stagePosition === 'top' ? 'bg-yellow-300 border-yellow-600' : 'bg-gray-100 border-gray-300'} rounded text-xs flex items-center justify-center`}
                    onClick={() => setStagePosition('top')}
                  >
                    Oben
                  </button>
                </div>
                <div className="h-10">
                  <button 
                    className={`w-full h-full border ${stagePosition === 'left' ? 'bg-yellow-300 border-yellow-600' : 'bg-gray-100 border-gray-300'} rounded text-xs flex items-center justify-center`}
                    onClick={() => setStagePosition('left')}
                  >
                    Links
                  </button>
                </div>
                <div className="h-10 col-start-2">
                  <div className="w-full h-full border border-blue-300 bg-blue-100 rounded flex items-center justify-center text-blue-800 text-xs">
                    Raum
                  </div>
                </div>
                <div className="h-10 col-start-3">
                  <button 
                    className={`w-full h-full border ${stagePosition === 'right' ? 'bg-yellow-300 border-yellow-600' : 'bg-gray-100 border-gray-300'} rounded text-xs flex items-center justify-center`}
                    onClick={() => setStagePosition('right')}
                  >
                    Rechts
                  </button>
                </div>
                <div className="h-10 col-start-2">
                  <button 
                    className={`w-full h-full border ${stagePosition === 'bottom' ? 'bg-yellow-300 border-yellow-600' : 'bg-gray-100 border-gray-300'} rounded text-xs flex items-center justify-center`}
                    onClick={() => setStagePosition('bottom')}
                  >
                    Unten
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* DJ Konfiguration */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">DJ</label>
          <div className="flex items-center mb-2">
            <input 
              type="checkbox" 
              id="hasDJ" 
              className="mr-2"
              checked={hasDJ}
              onChange={(e) => setHasDJ(e.target.checked)}
            />
            <label htmlFor="hasDJ">DJ einplanen</label>
          </div>
          
          {hasDJ && (
            <div className="ml-6">
              {hasStage && (
                <div className="mb-2">
                  <input 
                    type="radio" 
                    id="djOnStage" 
                    name="djPosition"
                    className="mr-2"
                    checked={djPosition === 'stage'}
                    onChange={() => setDjPosition('stage')}
                  />
                  <label htmlFor="djOnStage" className="text-sm">DJ auf der Bühne</label>
                </div>
              )}
              
              <div className="mb-2">
                <input 
                  type="radio" 
                  id="djSeparate" 
                  name="djPosition"
                  className="mr-2"
                  checked={djPosition !== 'stage'}
                  onChange={() => setDjPosition(hasStage ? 'bottom' : 'top')}
                />
                <label htmlFor="djSeparate" className="text-sm">DJ an separater Position</label>
              </div>
              
              {djPosition !== 'stage' && (
                <div className="ml-6">
                  <label className="block text-gray-700 mb-1 text-sm">DJ-Position</label>
                  <div className="grid grid-cols-3 gap-1 mb-3 max-w-xs">
                    <div className="h-10 col-start-2">
                      <button 
                        className={`w-full h-full border ${djPosition === 'top' ? 'bg-purple-300 border-purple-600' : 'bg-gray-100 border-gray-300'} rounded text-xs flex items-center justify-center`}
                        onClick={() => setDjPosition('top')}
                      >
                        Oben
                      </button>
                    </div>
                    <div className="h-10">
                      <button 
                        className={`w-full h-full border ${djPosition === 'left' ? 'bg-purple-300 border-purple-600' : 'bg-gray-100 border-gray-300'} rounded text-xs flex items-center justify-center`}
                        onClick={() => setDjPosition('left')}
                      >
                        Links
                      </button>
                    </div>
                    <div className="h-10 col-start-2">
                      <div className="w-full h-full border border-blue-300 bg-blue-100 rounded flex items-center justify-center text-blue-800 text-xs">
                        Raum
                      </div>
                    </div>
                    <div className="h-10 col-start-3">
                      <button 
                        className={`w-full h-full border ${djPosition === 'right' ? 'bg-purple-300 border-purple-600' : 'bg-gray-100 border-gray-300'} rounded text-xs flex items-center justify-center`}
                        onClick={() => setDjPosition('right')}
                      >
                        Rechts
                      </button>
                    </div>
                    <div className="h-10 col-start-2">
                      <button 
                        className={`w-full h-full border ${djPosition === 'bottom' ? 'bg-purple-300 border-purple-600' : 'bg-gray-100 border-gray-300'} rounded text-xs flex items-center justify-center`}
                        onClick={() => setDjPosition('bottom')}
                      >
                        Unten
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Tanzfläche und Sitzbereich Konfiguration */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-2">Aufteilung Tanzfläche / Sitzbereich</label>
        
        <div className="flex items-center mb-2">
          <input 
            type="checkbox" 
            id="hasDanceArea" 
            className="mr-2"
            checked={hasDanceArea}
            onChange={(e) => setHasDanceArea(e.target.checked)}
          />
          <label htmlFor="hasDanceArea">Tanzfläche einplanen</label>
        </div>
        
        {hasDanceArea && (
          <div className="ml-6">
            <label className="block text-gray-700 mb-1 text-sm">Größe der Tanzfläche: {danceAreaSize}%</label>
            <div className="flex items-center">
              <span className="mr-2 text-xs">Klein</span>
              <input 
                type="range" 
                min="20" 
                max="80" 
                value={danceAreaSize}
                onChange={(e) => {
                  setDanceAreaSize(parseInt(e.target.value));
                  setSeatingPercentage(100 - parseInt(e.target.value));
                }}
                className="w-48"
              />
              <span className="ml-2 text-xs">Groß</span>
            </div>
            
            <div className="flex mt-2 items-center">
              <div className="mr-2 flex items-center">
                <div className="w-3 h-3 bg-blue-200 mr-1"></div>
                <span className="text-xs">Tanzfläche</span>
              </div>
              <div className="mr-2 flex items-center">
                <div className="w-3 h-3 bg-green-200 mr-1"></div>
                <span className="text-xs">Sitzbereich ({100 - danceAreaSize}%)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomConfiguration;