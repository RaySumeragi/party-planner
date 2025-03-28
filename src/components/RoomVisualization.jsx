import React from 'react';

const RoomVisualization = ({ width, length, layout }) => {
  // Skalierungsfaktor für optimale Darstellung
  const scale = 750 / Math.max(width, length);
  
  // Grundfunktion zum Zeichnen verschiedener Layouts
  const renderLayoutElements = () => {
    switch(layout) {
      case 'klassisch':
        return (
          <>
            {/* Bühne */}
            <div 
              className="room-element stage-element"
              style={{ 
                top: '10%', 
                left: '25%', 
                width: '50%', 
                height: '15%'
              }}
            >
              <span className="room-element-label">Bühne</span>
            </div>
            
            {/* Tanzfläche */}
            <div 
              className="room-element dance-floor-element"
              style={{ 
                top: '40%', 
                left: '30%', 
                width: '40%', 
                height: '30%'
              }}
            >
              <span className="room-element-label">Tanzfläche</span>
            </div>

            {/* DJ */}
            <div 
              className="room-element dj-element"
              style={{ 
                bottom: '10%', 
                right: '15%', 
                width: '15%', 
                height: '15%'
              }}
            >
              <span className="room-element-label">DJ</span>
            </div>
          </>
        );
      
      case 'insel':
        return (
          <>
            {/* Bühne und DJ in der Mitte */}
            <div 
              className="room-element stage-element"
              style={{ 
                top: '50%', 
                left: '50%', 
                width: '30%', 
                height: '30%',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <span className="room-element-label">Bühne & DJ</span>
            </div>
            
            {/* Tanzfläche rund um die Bühne */}
            <div 
              className="room-element dance-floor-element"
              style={{ 
                top: '50%', 
                left: '50%', 
                width: '60%', 
                height: '60%',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: -1
              }}
            >
              <span 
                className="room-element-label"
                style={{ position: 'absolute', top: '20%' }}
              >Tanzfläche</span>
            </div>
            
            {/* Tische am Rand */}
            <div 
              style={{ 
                position: 'absolute',
                top: '50%', 
                left: '50%', 
                width: '90%', 
                height: '90%',
                border: '2px dashed #38a169',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: -2
              }}
            >
              <span 
                className="room-element-label"
                style={{ 
                  position: 'absolute',
                  bottom: '10%',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              >Tischbereich</span>
            </div>
          </>
        );
      
      case 'l-form':
        return (
          <>
            {/* L-Form Grundriss */}
            <div style={{ 
              position: 'absolute', 
              width: '70%', 
              height: '100%', 
              left: 0, 
              top: 0,
              borderRight: '1px dashed #a0aec0'
            }}></div>
            
            <div style={{ 
              position: 'absolute', 
              width: '30%', 
              height: '60%', 
              right: 0, 
              bottom: 0,
              borderTop: '1px dashed #a0aec0'
            }}></div>
            
            {/* Nicht verfügbarer Bereich */}
            <div style={{ 
              position: 'absolute', 
              width: '30%', 
              height: '40%', 
              right: 0, 
              top: 0,
              backgroundColor: '#f7fafc',
              border: '2px dashed #e2e8f0'
            }}>
              <span style={{ 
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '0.7rem',
                color: '#a0aec0'
              }}>Nicht verfügbar</span>
            </div>
            
            {/* Bühne */}
            <div 
              className="room-element stage-element"
              style={{ 
                top: '10%', 
                left: '10%', 
                width: '40%', 
                height: '15%'
              }}
            >
              <span className="room-element-label">Bühne</span>
            </div>
            
            {/* Tanzfläche */}
            <div 
              className="room-element dance-floor-element"
              style={{ 
                top: '40%', 
                left: '30%', 
                width: '40%', 
                height: '30%'
              }}
            >
              <span className="room-element-label">Tanzfläche</span>
            </div>

            {/* DJ */}
            <div 
              className="room-element dj-element"
              style={{ 
                bottom: '10%', 
                right: '5%', 
                width: '20%', 
                height: '15%'
              }}
            >
              <span className="room-element-label">DJ</span>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };

  // Erzeuge das Raster
  const renderGrid = () => {
    const gridLines = [];
    
    // Horizontale Linien
    for (let i = 1; i < 10; i++) {
      gridLines.push(
        <div 
          key={`h-${i}`} 
          className="grid-line grid-line-horizontal"
          style={{ top: `${i * 10}%` }}
        />
      );
    }
    
    // Vertikale Linien
    for (let i = 1; i < 10; i++) {
      gridLines.push(
        <div 
          key={`v-${i}`} 
          className="grid-line grid-line-vertical"
          style={{ left: `${i * 10}%` }}
        />
      );
    }
    
    return gridLines;
  };

  return (
    <div className="relative w-full h-full">
      {/* Breite-Beschriftung (oben) */}
      <div className="dimension-label width-label">
        {width} m
      </div>
      
      {/* Länge-Beschriftung (links) */}
      <div className="dimension-label length-label">
        {length} m
      </div>
      
      <div 
        className="room-frame"
        style={{ aspectRatio: `${width} / ${length}` }}
      >
        {/* Raster */}
        {renderGrid()}
        
        {/* Layout-Elemente */}
        {renderLayoutElements()}
        
        {/* Skalierungsinfo */}
        <div className="scale-info">
          Skalierung: 1m = {scale.toFixed(2)}px
        </div>
      </div>
    </div>
  );
};

export default RoomVisualization;