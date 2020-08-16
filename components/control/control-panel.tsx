import React from 'react';

const ControlPanel = () =>  {
    return (
      <div className="control-panel">
        <h3>Marker, Popup, NavigationControl and FullscreenControl </h3>
        <p>
          Map showing top 20 most populated cities of the United States. Click on a marker to learn
          more.
        </p>
        <p>
          Data source:{' '}
          <a href="https://en.wikipedia.org/wiki/List_of_United_States_cities_by_population">
            Wikipedia
          </a>
        </p>
        <div className="source-link">
          <a
            href="https://github.com/sonchau/mapbox"
            target="_blank"
          >
            View Code ↗
          </a>
        </div>
      </div>
    );
  
}
export default ControlPanel