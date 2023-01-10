import React from 'react';
import audi from '../assets/car-logos/audi.svg';
import bmw from '../assets/car-logos/bmw.svg';
import cadillac from '../assets/car-logos/cadillac.svg';
import chrysler from '../assets/car-logos/chrysler.svg';
import ferrari from '../assets/car-logos/ferrari.svg';
import lamborghini from '../assets/car-logos/lamborghini.svg';
import mclaren from '../assets/car-logos/mclaren.svg';
import nissanGTR from '../assets/car-logos/nissan-gtr.svg';
import porsche from '../assets/car-logos/porsche.svg';
import rollsRoyce from '../assets/car-logos/rolls-royce.svg';
import tesla from '../assets/car-logos/tesla.svg';

const RandomLuxLogo = () => {
  const carLogos = [
    audi,
    bmw,
    cadillac,
    chrysler,
    ferrari,
    lamborghini,
    mclaren,
    nissanGTR,
    porsche,
    rollsRoyce,
    tesla,
  ];

  const randomCarLogo = carLogos[Math.floor(Math.random() * carLogos.length)];
  return (
    <div className="mt-3 w-max mx-auto">
      <img className="w-16" src={randomCarLogo} alt="random-lux-car-logo" />
    </div>
  );
};

export default RandomLuxLogo;
