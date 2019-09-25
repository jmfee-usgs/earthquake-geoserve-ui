import * as calculator from 'azimuth';

import { Place } from './place';

export interface DistanceAzimuth {
  azimuth: number;
  distance: number;
}

export function getDistanceAzimuth(
  place: Place,
  referencePlace?: Place
): DistanceAzimuth {
  let azimuth = +place.azimuth;
  let distance = place.distance;

  if (referencePlace) {
    const distAz = calculator.azimuth(
      {
        elv: 0,
        lat: place.latitude,
        lng: place.longitude
      },
      {
        elv: 0,
        lat: referencePlace.latitude,
        lng: referencePlace.longitude
      }
    );
    azimuth = distAz.azimuth;
    distance = distAz.distance;
  }

  return {
    azimuth,
    distance
  };
}
