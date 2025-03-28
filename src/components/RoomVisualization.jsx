import React from 'react';

const RoomVisualization = ({ width, length, layout, elements = [] }) => {
  // Scale factor to ensure the visualization fits within the container
  const scaleFactor = 20;
  
  // Convert room dimensions to pixels (scaled)
  const roomWidthPx = width * scaleFactor;
  const roomLengthPx = length * scaleFactor;
  
  // Get layout-specific elements and styles
  const getLayoutElements = () => {
    switch(layout) {
      case 'klassisch':
        return (
          <>
            {/* Klassisches Layout zeigt eine Bühne oben und Tische im Hauptbereich */}
            <div 
              className="absolute bg-yellow-200 border border-yellow-400"
              style={{ 
                top: '5%', 
                left: '25%', 
                width: '50%', 
                height: '10%'
              }}
            >
              <span className="text-xs font-bold text-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Bühne</span>
            </div>
            
            {/* DJ-Bereich */}
            <div 
              className="absolute bg-purple-200 border border-purple-400"
              style={{ 
                top: '5%', 
                right: '5%', 
                width: '10%', 
                height: '10%'
              }}
            >
              <span className="text-xs font-bold text-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">DJ</span>
            </div>
            
            {/* Tanzfläche */}
            <div 
              className="absolute bg-blue-100 border border-blue-300"
              style={{ 
                top: '25%', 
                left: '30%', 
                width: '40%', 
                height: '30%'
              }}
            >
              <span className="text-xs font-bold text-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Tanzfläche</span>
            </div>
            
            {/* Tischbereich */}
            <div 
              className="absolute bg-green-100 border border-green-300"
              style={{ 
                bottom: '10%', 
                left: '10%', 
                width: '80%', 
                height: '25%'
              }}
            >
              <span className="text-xs font-bold text-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Tische</span>
            </div>
          </>
        );
      
      case 'insel':
        return (
          <>
            {/* Insel-Konzept: Bühne/DJ in der Mitte, Tische und Bereiche drumherum */}
            <div 
              className="absolute bg-yellow-200 border border-yellow-400 rounded-full"
              style={{ 
                top: '50%', 
                left: '50%', 
                width: '30%', 
                height: '30%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <span className="text-xs font-bold text-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Bühne & DJ</span>
            </div>
            
            {/* Tanzfläche rund um die Bühne */}
            <div 
              className="absolute bg-blue-100 border border-blue-300 rounded-full"
              style={{ 
                top: '50%', 
                left: '50%', 
                width: '50%', 
                height: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: -1
              }}
            >
              <span className="text-xs font-bold text-center w-full absolute top-1/4 left-1/2 transform -translate-x-1/2">Tanzfläche</span>
            </div>
            
            {/* Tische am Rand */}
            <div 
              className="absolute border-green-300 border-4 border-dashed rounded-full"
              style={{ 
                top: '50%', 
                left: '50%', 
                width: '85%', 
                height: '85%',
                transform: 'translate(-50%, -50%)',
                zIndex: -2
              }}
            >
              <span className="text-xs font-bold text-center w-full absolute bottom-5 left-1/2 transform -translate-x-1/2">Tischbereich</span>
            </div>
          </>
        );
      
      case 'l-form':
        return (
          <>
            {/* L-Form: Raum ist L-förmig, mit Bühne in einem Schenkel und DJ im anderen */}
            <div 
              className="absolute bg-gray-200 border border-gray-400"
              style={{ 
                width: '70%', 
                height: '100%',
                left: 0,
                top: 0
              }}
            />
            <div 
              className="absolute bg-gray-200 border border-gray-400"
              style={{ 
                width: '30%', 
                height: '60%',
                right: 0,
                bottom: 0
              }}
            />
            
            {/* Bereich definieren für den "weggeschnittenen" L-Teil */}
            <div 
              className="absolute bg-white"
              style={{ 
                width: '30%', 
                height: '40%',
                right: 0,
                top: 0
              }}
            />
            
            {/* Bühne im Hauptschenkel */}
            <div 
              className="absolute bg-yellow-200 border border-yellow-400"
              style={{ 
                top: '10%', 
                left: '10%', 
                width: '40%', 
                height: '15%'
              }}
            >
              <span className="text-xs font-bold text-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Bühne</span>
            </div>
            
            {/* DJ-Bereich im kleineren Schenkel */}
            <div 
              className="absolute bg-purple-200 border border-purple-400"
              style={{ 
                bottom: '15%', 
                right: '5%', 
                width: '20%', 
                height: '10%'
              }}
            >
              <span className="text-xs font-bold text-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">DJ</span>
            </div>
            
            {/* Tanzfläche in der Mitte/Übergang */}
            <div 
              className="absolute bg-blue-100 border border-blue-300"
              style={{ 
                bottom: '30%', 
                left: '30%', 
                width: '40%', 
                height: '25%'
              }}
            >
              <span className="text-xs font-bold text-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Tanzfläche</span>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full">
      <div 
        className="relative border-4 border-gray-800 bg-gray-100 mx-auto shadow-lg rounded"
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '500px',
          aspectRatio: `${width} / ${length}`
        }}
      >
        {/* Dimensionsanzeige - Breite oben */}
        <div className="absolute -top-6 left-0 w-full flex justify-center">
          <div className="bg-white px-2 py-1 text-sm font-bold border border-gray-400 rounded">
            {width} m
          </div>
        </div>
        
        {/* Dimensionsanzeige - Länge links */}
        <div className="absolute -left-6 top-0 h-full flex items-center">
          <div className="bg-white px-2 py-1 text-sm font-bold border border-gray-400 rounded transform -rotate-90">
            {length} m
          </div>
        </div>
        
        {/* Maßstabslinien - horizontal */}
        <div className="absolute top-0 left-0 w-full flex justify-between">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={`ht-${i}`} className="h-2 w-px bg-gray-500"></div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-between">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={`hb-${i}`} className="h-2 w-px bg-gray-500"></div>
          ))}
        </div>
        
        {/* Maßstabslinien - vertikal */}
        <div className="absolute top-0 left-0 h-full flex flex-col justify-between">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={`vl-${i}`} className="w-2 h-px bg-gray-500"></div>
          ))}
        </div>
        <div className="absolute top-0 right-0 h-full flex flex-col justify-between">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={`vr-${i}`} className="w-2 h-px bg-gray-500"></div>
          ))}
        </div>
        
        {/* Grundriss des Raumes */}
        <div className="absolute inset-0">
          {/* Layout-spezifische Elemente */}
          {getLayoutElements()}
          
          {/* Benutzerdefinierte Elemente */}
          {elements.map((element, index) => (
            <div
              key={index}
              className={`absolute ${element.className}`}
              style={{
                top: `${element.y}%`,
                left: `${element.x}%`,
                width: `${element.width}%`,
                height: `${element.height}%`,
                ...element.style
              }}
            >
              {element.label && (
                <span className="text-xs font-bold text-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {element.label}
                </span>
              )}
            </div>
          ))}
          
          {/* Legende */}
          <div className="absolute bottom-2 right-2 bg-white bg-opacity-80 p-1 rounded border border-gray-400 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 mr-1 bg-yellow-200 border border-yellow-400"></div>
              <span>Bühne</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 mr-1 bg-purple-200 border border-purple-400"></div>
              <span>DJ</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 mr-1 bg-blue-100 border border-blue-300"></div>
              <span>Tanzfläche</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomVisualization;