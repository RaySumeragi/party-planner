import React, { useState, useEffect } from 'react';
import RoomVisualization from './RoomVisualization';
import RoomConfiguration from './RoomConfiguration';
import PartyDetails from './PartyDetails';
import EquipmentRecommendations from './EquipmentRecommendations';

const PartyPlanner = () => {
  // Raum-Dimensionen mit Standardwerten
  const [roomWidth, setRoomWidth] = useState(10);
  const [roomLength, setRoomLength] = useState(15);
  const [roomArea, setRoomArea] = useState(150);
  
  // Raumausrichtung/Layout
  const [layoutStyle, setLayoutStyle] = useState('classic');
  
  // Bühnen-Konfiguration
  const [hasStage, setHasStage] = useState(false);
  const [stagePosition, setStagePosition] = useState('bottom');
  
  // DJ-Konfiguration
  const [hasDJ, setHasDJ] = useState(false);
  const [djPosition, setDjPosition] = useState('stage');
  
  // Tanzfläche und Sitzbereiche
  const [danceAreaSize, setDanceAreaSize] = useState(40);
  const [hasDanceArea, setHasDanceArea] = useState(true);
  const [seatingPercentage, setSeatingPercentage] = useState(60);
  
  // Berechnete Sitzbereiche
  const [seatingAreas, setSeatingAreas] = useState([]);
  
  // Aktualisiere die Fläche, wenn sich Länge oder Breite ändert
  useEffect(() => {
    setRoomArea(roomWidth * roomLength);
  }, [roomWidth, roomLength]);
  
  // Aktualisiere die Ausrichtung, wenn sich das Layout ändert
  useEffect(() => {
    updateLayoutConfiguration(layoutStyle);
  }, [layoutStyle]);
  
  // Aktualisiere die Sitzbereiche
  useEffect(() => {
    calculateSeatingAreas();
  }, [danceAreaSize, seatingPercentage, roomWidth, roomLength, hasStage, stagePosition, layoutStyle]);
  
  // Update Konfiguration basierend auf ausgewähltem Layout
  const updateLayoutConfiguration = (layout) => {
    switch (layout) {
      case 'classic':
        setHasStage(true);
        setStagePosition('bottom');
        setHasDJ(true);
        setDjPosition('stage');
        setHasDanceArea(true);
        setDanceAreaSize(40);
        break;
      case 'island':
        setHasStage(false);
        setHasDJ(true);
        setDjPosition('top');
        setHasDanceArea(true);
        setDanceAreaSize(40);
        break;
      case 'l-shape':
        setHasStage(true);
        setStagePosition('left');
        setHasDJ(true);
        setDjPosition('stage');
        setHasDanceArea(true);
        setDanceAreaSize(30);
        break;
      case 'lounge':
        setHasStage(false);
        setHasDJ(true);
        setDjPosition('right');
        setHasDanceArea(true);
        setDanceAreaSize(20);
        break;
      case 'theater':
        setHasStage(true);
        setStagePosition('bottom');
        setHasDJ(true);
        setDjPosition('stage');
        setHasDanceArea(false);
        break;
      default:
        break;
    }
  };
  
  // Berechnung der Sitzbereiche
  const calculateSeatingAreas = () => {
    const areas = [];
    
    if (layoutStyle === 'classic') {
      if (hasDanceArea) {
        areas.push({
          style: {
            width: '80%',
            height: `${50 - (danceAreaSize / 2)}%`,
            left: '10%',
            top: `${50 + (danceAreaSize / 2)}%`
          }
        });
      } else {
        areas.push({
          style: {
            width: '80%',
            height: '70%',
            left: '10%',
            top: '20%'
          }
        });
      }
    } else if (layoutStyle === 'island') {
      if (hasDanceArea) {
        // Oben
        areas.push({
          style: {
            width: '80%',
            height: `${(100 - danceAreaSize) / 3}%`,
            left: '10%',
            top: '5%'
          }
        });
        
        // Unten
        areas.push({
          style: {
            width: '80%',
            height: `${(100 - danceAreaSize) / 3}%`,
            left: '10%',
            bottom: '5%'
          }
        });
        
        // Links
        areas.push({
          style: {
            width: `${(100 - danceAreaSize) / 4}%`,
            height: '50%',
            left: '5%',
            top: '25%'
          }
        });
        
        // Rechts
        areas.push({
          style: {
            width: `${(100 - danceAreaSize) / 4}%`,
            height: '50%',
            right: '5%',
            top: '25%'
          }
        });
      } else {
        // Wenn keine Tanzfläche, dann reguläre Anordnung
        areas.push({
          style: {
            width: '90%',
            height: '90%',
            left: '5%',
            top: '5%'
          }
        });
      }
    } else if (layoutStyle === 'l-shape') {
      // L-Form: Sitzbereiche in L-Form angeordnet
      areas.push({
        style: {
          width: '60%',
          height: '40%',
          right: '5%',
          bottom: '5%'
        }
      });
      
      areas.push({
        style: {
          width: '30%',
          height: '50%',
          right: '35%',
          top: '5%'
        }
      });
    } else if (layoutStyle === 'lounge') {
      // Lounge-Style: Mehrere kleine Sitzbereiche
      // Obere Reihe
      areas.push({
        style: {
          width: '20%',
          height: '20%',
          left: '10%',
          top: '10%'
        }
      });
      
      areas.push({
        style: {
          width: '20%',
          height: '20%',
          left: '40%',
          top: '10%'
        }
      });
      
      areas.push({
        style: {
          width: '20%',
          height: '20%',
          right: '10%',
          top: '10%'
        }
      });
      
      // Untere Reihe
      areas.push({
        style: {
          width: '20%',
          height: '20%',
          left: '10%',
          bottom: '10%'
        }
      });
      
      areas.push({
        style: {
          width: '20%',
          height: '20%',
          left: '40%',
          bottom: '10%'
        }
      });
      
      areas.push({
        style: {
          width: '20%',
          height: '20%',
          right: '10%',
          bottom: '10%'
        }
      });
    } else if (layoutStyle === 'theater') {
      // Theater-Stil: Sitzbereiche in Reihen vor der Bühne
      areas.push({
        style: {
          width: '80%',
          height: '70%',
          left: '10%',
          top: '10%'
        }
      });
    }
    
    setSeatingAreas(areas);
  };
  
  // Inkrementiere/Dekrementiere die Raumdimensionen
  const adjustDimension = (dimension, value) => {
    if (dimension === 'width') {
      const newWidth = Math.max(2, roomWidth + value);
      setRoomWidth(newWidth);
    } else if (dimension === 'length') {
      const newLength = Math.max(2, roomLength + value);
      setRoomLength(newLength);
    }
  };

  // Behandlung der direkten Eingabe
  const handleDirectInput = (dimension, value) => {
    const numValue = Math.max(2, Number(value) || 2);
    
    if (dimension === 'width') {
      setRoomWidth(numValue);
    } else if (dimension === 'length') {
      setRoomLength(numValue);
    } else if (dimension === 'area') {
      const newLength = Math.sqrt(numValue * (roomLength / roomWidth));
      const newWidth = numValue / newLength;
      setRoomLength(Math.round(newLength));
      setRoomWidth(Math.round(newWidth));
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Party Planner</h1>
      
      <RoomVisualization 
        roomWidth={roomWidth}
        roomLength={roomLength}
        roomArea={roomArea}
        adjustDimension={adjustDimension}
        handleDirectInput={handleDirectInput}
        hasStage={hasStage}
        stagePosition={stagePosition}
        hasDJ={hasDJ}
        djPosition={djPosition}
        hasDanceArea={hasDanceArea}
        danceAreaSize={danceAreaSize}
        seatingAreas={seatingAreas}
      />

      <RoomConfiguration 
        layoutStyle={layoutStyle}
        setLayoutStyle={setLayoutStyle}
        hasStage={hasStage}
        setHasStage={setHasStage}
        stagePosition={stagePosition}
        setStagePosition={setStagePosition}
        hasDJ={hasDJ}
        setHasDJ={setHasDJ}
        djPosition={djPosition}
        setDjPosition={setDjPosition}
        hasDanceArea={hasDanceArea}
        setHasDanceArea={setHasDanceArea}
        danceAreaSize={danceAreaSize}
        setDanceAreaSize={setDanceAreaSize}
        seatingPercentage={seatingPercentage}
        setSeatingPercentage={setSeatingPercentage}
      />

      <PartyDetails roomArea={roomArea} />

      <EquipmentRecommendations />
    </div>
  );
};

export default PartyPlanner;