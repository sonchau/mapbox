
// @ts-nocheck
import React, {useState} from 'react';
import MapGL from 'react-map-gl';
import ControlPanel from '../components/layers/control-panel';

const Layers = () => {
    const [viewport, setViewport] = useState({
      latitude: -37.8112451,
      longitude: 144.9543962,
        zoom: 15.5,
        bearing: 0,
        pitch: 0
      });
    const [mapStyle, setMapStyle]  = useState('')
    const onStyleChange = (style:string) => {
      setMapStyle(style)
    }
  return (
      
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle={mapStyle}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      >
        <ControlPanel
          onChange={onStyleChange}
        />
      </MapGL>
  )
}

export default Layers
