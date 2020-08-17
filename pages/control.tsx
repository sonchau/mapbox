// @ts-nocheck
import React, {useState} from 'react';
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

import ControlPanel from '../components/control/control-panel';
import Pins from '../components/control/pins';
import CityInfo from '../components/control/city-info';

import CITIES from '../data/cities.json';

const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const fullscreenControlStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px'
};
const ControlMap = () => {
  const [viewport, setViewport] = useState({
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
    });
  const [popupInfo, setPopupInfo] = useState(null)
  const onClickMarker = city => {
    setPopupInfo(city)
  };  

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
    >
        <Pins data={CITIES} onClick={onClickMarker} />
        {popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <CityInfo info={popupInfo} />
        </Popup>
        )}

        {/* current location top left*/}
        <div style={geolocateStyle}>
          <GeolocateControl />
        </div>
        {/* fullscreen control top left*/}
        <div style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        {/* zoom in and out control top left*/}
        <div style={navStyle}>
          <NavigationControl />
        </div>
        {/* show the scale at the bottom left*/}
        <div style={scaleControlStyle}>
          <ScaleControl />
        </div>

          <ControlPanel />
    </MapGL>
)
}

export default ControlMap
