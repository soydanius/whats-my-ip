import { useState, useEffect } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const ipifyKey = import.meta.env.VITE_IPIFY_KEY;

  const [ip, setIp] = useState("");

  useEffect(() => {
    const getIp = async () => {
      const respone = await fetch(
        `https://geo.ipify.org/api/v2/country?apiKey=${ipifyKey}`
      );
      const ipData = await respone.json();
      setIp(ipData.ip);
    };
    getIp();
  }, []);

  return (
    <>
      <h1>{`What's my IP?`}</h1>
      <div className="card">
        <h2>Your IP is: {ip}</h2>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MapContainer
        style={{ height: "500px", width: "1000px" }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default App;
