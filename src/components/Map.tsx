'use client';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const POSITION: [number, number] = [50.0878, 14.4291];

export default function Map({ label }: { label: string }) {
  useEffect(() => {
    // Fix leaflet default marker icon in Next.js
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer
      center={POSITION}
      zoom={15}
      style={{ height: '100%', width: '100%', borderRadius: '6px' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={POSITION}>
        <Popup>{label}</Popup>
      </Marker>
    </MapContainer>
  );
}
