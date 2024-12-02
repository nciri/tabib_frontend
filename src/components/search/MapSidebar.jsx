import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Icone personnalisée pour les marqueurs
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Composant pour afficher une carte avec des médecins localisés
const MapSidebar = ({ doctors }) => {
  // Coordonées par défaut (centré sur Paris)
  const defaultPosition = [48.8566, 2.3522];

  return (
    <div className="map-sidebar">
      <MapContainer
        center={defaultPosition}
        zoom={12}
        style={{ height: '100%', width: '100%', borderRadius: '10px' }} // Taille correcte
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {doctors.map((doctor, index) => (
          <Marker
            key={index}
            position={doctor.coordinates}
            icon={customIcon}
          >
            <Popup>
              <strong>{doctor.name}</strong><br />
              {doctor.address}<br />
              {doctor.specialty}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapSidebar;
