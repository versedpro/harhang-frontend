import { useEffect, useState } from 'react';
import BingMapsReact, { map } from '../../utils/Bingmaps/bingMaps';
import mapOptions from '../../utils/Bingmaps/mapOptions';

export default function Map({ setPlace }: { setPlace: any }) {
  const [pins, setPins] = useState<any>(null);

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
  }, [setPlace]);

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
