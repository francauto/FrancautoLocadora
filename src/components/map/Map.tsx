import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = () => {
  const position = [-20.545735817532602, -47.42496940963758]; // Coordenadas da Francauto (exemplo)

  useEffect(() => {
    // Ensure the map container is properly initialized
    const mapContainer = document.getElementById("map-container");
    if (mapContainer) {
      mapContainer.style.height = "400px";
      mapContainer.style.width = "100%";
    }
  }, []);

  return (
    <MapContainer
      id="map-container"
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Francauto - Concessionária</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
