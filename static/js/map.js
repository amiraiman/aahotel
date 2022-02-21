// coorinates
const coords = [38.898, -77.045];

// Create map centered to location
const map = L.map("map").setView(coords, 16);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiYS1haW1hbiIsImEiOiJja3I4ZzZ4amgxYnEyMm9udmRteXF3d2MxIn0.lAVRh_r6b_uT5-x38J3y3Q",
  }
).addTo(map);

// Add marker to coords
const mapPointer = L.marker(coords).addTo(map);

// Add popup on marker
mapPointer.bindPopup("We are here!").openPopup();
