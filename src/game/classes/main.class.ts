import { Container, Graphics } from 'pixi.js';
import { Map } from './map/map.class';
import { PlatformOne } from './levels/roundOne/level-one.class';
import { Car } from './car.class.';

export class GameComponent {
  private _container = new Container();
  private map = new Map();
  private car = new Car();
  private platformOne = new PlatformOne();

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
    this.platformOne.init();
    this.car.init();
    this.car.callback = (value: any) => {
      if (
        value.carY >
        this.platformOne.container.y - this.platformOne.container.height + 20
      ) {
        value.ticker.stop();
        value.carY = value.carY;
      }
    };
    this._container.addChild(this.platformOne.container, this.car.container);
  }
}
