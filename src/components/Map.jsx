import cloud from "../assets/cloud.png";
import cloud1 from "../assets/cloud1.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Footer from "./Footer";
export default function Map() {
  const position = [41.2995, 69.2401];

  return (
    <div className="relative">
      <div
        className="absolute top-[-50px] left-0 w-full h-50 hidden md:block   bg-center bg-cover  z-10"
        style={{ backgroundImage: `url(${cloud1})` }}
      ></div>
      <MapContainer
        center={position}
        zoom={13}
        className="z-0 w-full h-[610px]"
        style={{}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Toshkent markeri</Popup>
        </Marker>
      </MapContainer>{" "}
      <div
        className="w-full absolute top-[100px] h-[750px] hidden md:block   bg-center bg-cover  z-10"
        style={{ backgroundImage: `url(${cloud})` }}
      ></div>
      <Footer/>
    </div>
  );
}
