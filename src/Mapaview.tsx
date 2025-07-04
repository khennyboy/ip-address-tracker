import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { IPData } from "./helpers";
import { useRef } from "react";

export default function MapView({ data }: IPData) {
  const markerRef = useRef<L.Marker>(null);

  if (!data) return null;

  const position: [number, number] = [
    data.latitude || 6.4474,
    data.longitude || 3.3909,
  ];

  return (
    <div className="w-full h-screen">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "95%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          ref={markerRef}
          eventHandlers={{
            add: (e) => {
              e.target.openPopup();
            },
          }}
        >
          <Popup>
            <div>
              <div>
                <strong>IP:</strong> {data.ip}
              </div>
              <div>
                <strong>Location:</strong> {data.country_name}, {data.region}
              </div>
              <div>
                <strong>ISP:</strong> {data.region}
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
