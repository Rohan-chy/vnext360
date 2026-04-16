'use client';

import { useState, useEffect, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type LocationData = {
  lat: number;
  lng: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
};

interface Props {
  initialPosition: { lat: number; lng: number };
  onSelect: (data: LocationData) => void;
}

// ✅ Fix marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function LocationPicker({ initialPosition, onSelect }: Props) {
  const [position, setPosition] = useState(initialPosition);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const cache = useRef<Map<string, any[]>>(new Map());
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // --------------------
  // Search API
  // --------------------
  const searchLocation = async (query: string) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=5&q=${encodeURIComponent(
        query
      )}`,
      {
        headers: {
          'User-Agent': 'ClinicApp/1.0',
        },
      }
    );
    return res.json();
  };

  // --------------------
  // Debounce search
  // --------------------
  useEffect(() => {
    if (search.length < 3) {
      setResults([]);
      return;
    }

    if (cache.current.has(search)) {
      setResults(cache.current.get(search)!);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      const data = await searchLocation(search);
      setResults(data);
      cache.current.set(search, data);
    }, 400);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [search]);

  // --------------------
  // Reverse geocode
  // --------------------
  const reverseGeocode = async (lat: number, lng: number) => {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`
    );
    const data = await res.json();

    return {
      address: data.display_name,
      city: data.address?.city || data.address?.town || data.address?.village,
      state: data.address?.state,
      country: data.address?.country,
    };
  };

  useEffect(() => {
    (async () => {
      const addr = await reverseGeocode(position.lat, position.lng);
      onSelect({ ...position, ...addr });
    })();
  }, [position]);

  // --------------------
  // Map helpers
  // --------------------
  const MapClick = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });
    return null;
  };

  const ResizeMap = () => {
    const map = useMap();
    useEffect(() => {
      setTimeout(() => map?.invalidateSize(), 200);
    }, []);
    return null;
  };

  return (
    <div>
      {/* Search */}
      <input
        className="w-full p-2 border rounded mb-2"
        placeholder="Search location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Results */}
      {results.length > 0 && (
        <div className="border rounded max-h-40 overflow-auto mb-2">
          {results.map((r, i) => (
            <div
              key={i}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setPosition({
                  lat: parseFloat(r.lat),
                  lng: parseFloat(r.lon),
                });
                setResults([]);
                setSearch(r.display_name);
              }}
            >
              {r.display_name}
            </div>
          ))}
        </div>
      )}

      {/* Map */}
      <MapContainer center={position} zoom={15} style={{ height: 400 }}>
        <ResizeMap />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapClick />
        <Marker
          position={position}
          draggable
          eventHandlers={{
            dragend: (e) => setPosition(e.target.getLatLng()),
          }}
        />
      </MapContainer>
    </div>
  );
}
