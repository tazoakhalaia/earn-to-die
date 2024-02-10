import { Assets, Container, Sprite } from 'pixi.js';

export class Car {
  private _container = new Container();
  get container() {
    return this._container;
  }
  init() {
    this.renderCar()
  }

  renderCar() {
    const car = new Sprite(Assets.get('car'));
    this._container.addChild(car);
  }
}
