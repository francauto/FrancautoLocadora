import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  marginLeft: "-300px", // Move the map more to the left
};

const center = {
  lat: -23.55052, // Latitude de SP (exemplo)
  lng: -46.633308, // Longitude de SP (exemplo)
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBdYOXngqacNlYb6JJlTWBibmc9xcwTJpY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
