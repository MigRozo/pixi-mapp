import * as PIXI from 'pixi.js';

PIXI.settings.RESOLUTION = window.devicePixelRatio;

const Mapp = {};

Mapp.Map = function ({ width = 300, height = 300, mapTexture, pinTexture }) {
    this.width = width;
    this.height = height;
    this.mapTexture = mapTexture;
    this.pinTexture = pinTexture;
    this.markers = [];

    const app = new PIXI.Application({ width, height, autoDensity: true });
    document.body.appendChild( app.view );

    const mapGroup = new PIXI.Container();

    const mapSprite = new PIXI.Sprite.from( this.mapTexture );
    mapGroup.addChild( mapSprite );

    app.stage.addChild( mapGroup );

    this.app = app;
    this.group = mapGroup;
};

Mapp.Marker = function ({ map, x = 0, y = 0, texture }) {
    const pinTexture = texture ? texture : map.pinTexture;
    const pinSprite = new PIXI.Sprite.from( pinTexture );

    pinSprite.x = x;
    pinSprite.y = y;
    map.group.addChild( pinSprite );

    map.markers.push( this )
};

export { Mapp };