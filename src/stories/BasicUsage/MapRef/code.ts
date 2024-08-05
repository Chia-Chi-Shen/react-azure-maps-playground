export const setCenterCode = `
import { useEffect, useState } from 'react';
import { AzureMap, useAzureMaps } from 'react-azure-maps';

const SetCenter = () => {
  const [mapCenter, setMapCenter] = useState([0, 0] as Number[]);
  const { mapRef, isMapReady } = useAzureMaps();

  const applyMapCenter = (mapCenter: Number[]) => {
    if (mapRef)
      // set map center
      mapRef.setCamera({ center: mapCenter });
  };

  // Set the map center when the map is ready
  useEffect(() => {
    if (isMapReady && mapRef) {
      applyMapCenter(mapCenter);
    }
  }, [isMapReady]);

  // Set the map center when the mapCenter state changes
  useEffect(() => {
    applyMapCenter(mapCenter);
  }, [mapCenter]);

  return (
    <>
      <button 
        style={{ color: 'dodgerblue', marginBottom: '10px' }} 
        onClick={() => setMapCenter(getRandomPosition())}>
        Change Map Center
      </button>
      <div className="defaultMap">
        <AzureMap options={mapOptions} />
      </div>
    </>
  );
};

const getRandomPosition = () => {
  const randomLongitude = Math.floor(Math.random() * (180 - -180) + -180);
  const randomLatitude = Math.floor(Math.random() * (-90 - 90) + 90);
  return [randomLatitude, randomLongitude];
};
`;
