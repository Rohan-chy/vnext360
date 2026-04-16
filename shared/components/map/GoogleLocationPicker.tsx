'use client';

import { SpinnerCustom } from '@/components/custom-components/SpinnerCustom';
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Autocomplete,
} from '@react-google-maps/api';
import { useRef, useState } from 'react';

const libraries: 'places'[] = ['places'];

type LocationData = {
  lat: number;
  lng: number;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
};

type Props = {
  initialPosition: { lat: number; lng: number };
  onSelect: (data: LocationData) => void;
};

export default function GoogleLocationPicker({
  initialPosition,
  onSelect,
}: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  // Proper typing
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] = useState(initialPosition);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  if (!isLoaded) return <SpinnerCustom />;

  // Called when user selects a place from autocomplete
  const onPlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();

    if (!place || !place.geometry || !place.geometry.location) return;

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    const data: LocationData = {
      lat,
      lng,
      address: place.formatted_address,
      city: place.address_components?.find((c) => c.types.includes('locality'))
        ?.long_name,
      state: place.address_components?.find((c) =>
        c.types.includes('administrative_area_level_1')
      )?.long_name,
      country: place.address_components?.find((c) =>
        c.types.includes('country')
      )?.long_name,
    };

    setMarker({ lat, lng });
    onSelect(data);
    map?.panTo({ lat, lng });
  };

  return (
    <div>
      {/* Autocomplete search */}
      <Autocomplete
        onLoad={(ref: any) => (autocompleteRef.current = ref)}
        onPlaceChanged={onPlaceChanged}
        options={{
          componentRestrictions: { country: 'np' }, // restrict to Nepal
        }}
      >
        <input
          className="w-full p-2 border rounded mb-2"
          placeholder="Search location..."
        />
      </Autocomplete>

      {/* Google Map */}
      <GoogleMap
        center={marker}
        zoom={15}
        mapContainerStyle={{ height: '400px', width: '100%' }}
        onLoad={(mapInstance: any) => setMap(mapInstance)}
        onClick={(e: any) => {
          if (!e.latLng) return;

          const lat = e.latLng.lat();
          const lng = e.latLng.lng();

          setMarker({ lat, lng });
          onSelect({ lat, lng }); // saves API calls
        }}
      >
        <Marker
          position={marker}
          draggable
          onDragEnd={(e: any) => {
            if (!e.latLng) return;

            const lat = e.latLng.lat();
            const lng = e.latLng.lng();

            setMarker({ lat, lng });
            onSelect({ lat, lng });
          }}
        />
      </GoogleMap>
    </div>
  );
}
