
import React, {useState} from 'react';
import MapGL from 'react-map-gl';

const BasicMap = () => {
    const [viewport, setViewport] = useState({
        latitude: -37.8112451,
        longitude: 144.9543962,
        zoom: 14,
        bearing: 0,
        pitch: 0
      });

  return (
      
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      />
  )
}

export default BasicMap
