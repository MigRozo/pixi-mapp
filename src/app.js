import { Mapp } from './pixi-mapp';
import mapTexture from './assets/map1.svg';
import redMarker from './assets/pin1.svg';
import yellowMarker from './assets/pin2.svg';
import greenMarker from './assets/pin3.svg';

import { places } from './demo';

const myMap = new Mapp.Map({ width: 1500, height: 500, mapTexture, pinTexture: redMarker });

const mainPin = new Mapp.Marker({ map: myMap, x: 900, y: 50, texture: yellowMarker });

const myPins = places.map( place => new Mapp.Marker({ map: myMap, x: place.x, y: place.y }) );

const otherPins = [];
for ( let i = 0; i < 8; i++ ) {
    otherPins.push( new Mapp.Marker({ map: myMap, x: 100+(i*40), y: 400, texture: greenMarker }) )
}

/* const appOnResize = () => {
    myMap.app.renderer.resize( window.innerWidth, MAP_HEIGHT );
};
window.onresize = appOnResize; */
