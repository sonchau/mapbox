
import React, {useState} from 'react';
import MapGL, {LinearInterpolator, WebMercatorViewport} from 'react-map-gl';
import ControlPanel from '../components/zoom-to-bounds/control-panel';
import MAP_STYLE from '../components/zoom-to-bounds/map-style';
import bbox from '@turf/bbox';

const ZoomToBounds = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.785164,
    longitude: -122.4,
    zoom: 11,
    bearing: 0,
    pitch: 0
  });

  const onClick = event => {
    const feature = event.features[0];
    if (feature) {
      // calculate the bounding box of the feature
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);
      // construct a viewport instance from the current state
      const newViewport = new WebMercatorViewport(viewport);
      const {longitude, latitude, zoom} = newViewport.fitBounds([[minLng, minLat], [maxLng, maxLat]], {
        padding: 40
      });

      setViewport({
          ...viewport,
          longitude,
          latitude,
          zoom,
          transitionInterpolator: new LinearInterpolator({
            around: [event.offsetCenter.x, event.offsetCenter.y]
          }),
          transitionDuration: 1000
        }
      );
    }
  };

  return (
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle={MAP_STYLE}
        interactiveLayerIds={['sf-neighborhoods-fill']}
        onClick={onClick}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      >
        <ControlPanel />
      </MapGL>  
  )
}

export default ZoomToBounds
