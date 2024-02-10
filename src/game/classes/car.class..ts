import { Assets, Container, Sprite, Ticker } from 'pixi.js';

export class Car {
  private _container = new Container();
  private gravity = 1
  private ticker = new Ticker()
  private car: Sprite | undefined
  private _callback = (value:any) => undefined
  get callback() {
    return this._callback
  }

  set callback(value:any) {
    this._callback = value
  }

  get container() {
    return this._container;
  }
  init() {
    this.renderCar()
  }

 
  
  renderCar() {
    this.car = new Sprite(Assets.get('car'));
    const gravityFall = () => {
      if(this.car)
      this.car.y += this.gravity
      this._callback({
        ticker: this.ticker,
        carY: this.car?.y
      })
    }
    this.car.width = 110
    this.car.height = 110
    this.ticker.add(gravityFall)
    this.ticker.start()
    this._container.addChild(this.car);
    
  }


}
