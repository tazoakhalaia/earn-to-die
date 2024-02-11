import { Assets, Container, Sprite, Ticker } from 'pixi.js';

export class Car {
  private _container = new Container();
  private ticker = new Ticker()
  private car: Sprite | undefined
  private defaultCar!: string 
  private speed = 10
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
    this.defaultCar = 'car'
    this._container.x = 20
    this.renderCar()
    this.carMove()
  }

  changeCar = (value:any) => {
    this.defaultCar = value
    if (this.car) {
      this._container.removeChild(this.car); 
      this.renderCar(); 
    }
  }

  renderCar = () =>  {
    this.car = new Sprite(Assets.get(this.defaultCar));
    this.car.width = 220
    this.car.height = 110
    this.car.y = 530
    this._container.addChild(this.car); 
  }

  carMove() {
    window.addEventListener('keydown', (e) => {
      const key = e.key
      if(key === 'w'){
        
        this._callback({
         carX: this.car?.x,
         speed: this.speed
        })
      }
    //  if(key === "w") {
    //   if(this.car)
    //   this.car.x += this.speed
    //  }
    })
  }


}
