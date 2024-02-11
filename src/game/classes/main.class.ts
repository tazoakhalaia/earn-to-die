import { Assets, Container, Graphics, Sprite, Ticker } from 'pixi.js';
import { Map } from './map/map.class';
import { Platform } from './platform/platform.class';
import { Car } from './car.class.';
import { Background } from './background.class';

export class GameComponent {
  private _container = new Container();
  private map = new Map();
  private car = new Car();
  private platform = new Platform();
  private background = new Background();
  private ticker = new Ticker()

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
    this.background.init();
    this.platform.init();
    this.car.init();
    this.car.changeCar('bigRedCar');
    this.car.callback = (value: any) => {
      console.log(value);
      this.platform.container.x -= value.speed
    };
    this._container.addChild(
      this.background.container,
      this.platform.container,
      this.car.container
    );
  }
}
