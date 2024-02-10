import { Container, Graphics } from 'pixi.js';
import { Map } from './map/map.class';
import { PlatformOne } from './levels/roundOne/level-one.class';

export class GameComponent {
  private _container = new Container();
  private map = new Map();
  private platformOne = new PlatformOne()

  get container() {
    return this._container;
  }
  init() {
    // this.map.init();
    // this.map.callback = (value: any) => {
    //   console.log(value);
    //   value.garageContainer.removeChildren();
    // };
    // this._container.addChild(this.map.container);
    this.platformOne.init()
    this._container.addChild(this.platformOne.container)
  }
}
