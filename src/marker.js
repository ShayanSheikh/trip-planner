const mapboxgl = require("mapbox-gl");

function buildMarker(place, coords) {
  let marker = document.createElement('div');
  marker.style.width = "32px";
  marker.style.height = "39px";
  if(place === 'hotel') 
    marker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  else if (place === 'activity')
    marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  else
    marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  
  return new mapboxgl.Marker(marker).setLngLat(coords);
}

module.exports = buildMarker;