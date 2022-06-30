import { useEffect, useState } from 'react';
import BingMapsReact, { map } from '../../utils/bingmaps/bingMaps';
import mapOptions from '../../utils/bingmaps/mapOptions';

export default function Map() {
  const [pins, setPins] = useState<any>(null);

  const setPlace = (e: any) => {
    console.log(e);
  };

  useEffect(() => {
    setTimeout(() => {
      window.Microsoft &&
        window.Microsoft.Maps.Events.addHandler(map.current, 'click', (e: any) => {
          setPlace(e);
          setPins([
            {
              center: {
                latitude: e.location.latitude,
                longitude: e.location.longitude
              },
              options: {
                icon: '/image/marker.png'
              }
            }
          ]);
        });
    }, 500);
  }, []);

  // console.log(window.Microsoft);

  return (
    <BingMapsReact
      bingMapsKey="AtX6MlcR2y6S7nioFZbnCen9vBj9mEssBUxozRkd2SoTKAKWsfCCBRf87_H_9X3S"
      mapOptions={mapOptions}
      pushPins={pins}
      height="670px"
      viewOptions={{
        mapTypeId: 'road'
      }}
    />
  );
}
