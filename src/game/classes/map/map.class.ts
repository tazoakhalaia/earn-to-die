import { Assets, Container, Sprite } from 'pixi.js';

export class Map {
  private _container = new Container();
  private map: Sprite | undefined;
  get container() {
    return this._container;
  }

  init() {
    this.renderMap();
  }

  renderMap() {
    this.map = new Sprite(Assets.get('map'));
    this._container.addChild(this.map);
  }
}
