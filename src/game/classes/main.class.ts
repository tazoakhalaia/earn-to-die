import { Container, Graphics } from 'pixi.js';
import { Car } from './car.class.';
import { Map } from './map/map.class';

export class GameComponent {
  private _container = new Container();
  private map = new Map();

  get container() {
    return this._container;
  }
  init() {
    this.map.init();
    this._container.addChild(this.map.container);
  }
}
