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

Mapp.Marker = function ({ map, x = 0, y = 0, texture, id = null }) {
    const pinTexture = texture ? texture : map.pinTexture;
    const pinSprite = new PIXI.Sprite.from( pinTexture );

    pinSprite.id = id;
    pinSprite.x = x;
    pinSprite.y = y;
    pinSprite.anchor.set(0.5);
    pinSprite.interactive = true;
    pinSprite.buttonMode = true;

    pinSprite.on( 'pointerover', function () {
        this.isOver = true;
        if (this.isDown) return;

        this.scale.set(1.1);
        // gsap.to(this.scale, {duration: 0.3, x: 1.2, y: 1.2 });
    });
    pinSprite.on( 'pointerout', function () {
        this.isOver = false;
        if (this.isdown) return;

        this.scale.set(1);
        // gsap.to(this.scale, {duration: 0.3, x: 1, y: 1 });
    });

    pinSprite.on( 'pointerdown', () => markerOnHover( pinSprite ) );

    map.group.addChild( pinSprite );

    map.markers.push( this );
};

const markerOnHover = (marker) => console.log( marker.id );

export { Mapp };