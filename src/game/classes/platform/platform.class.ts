import { Assets, Container, Graphics, Sprite } from 'pixi.js';

export class Platform {
  private _container = new Container();
  private platform = new Container();
  private road!: Sprite;
  get container() {
    return this._container;
  }

  init() {
    this._container.y = 550;
    this._container.x = 0;
    this.renderPlatform();
  }

  renderPlatform() {
    this.platform = new Container();
    for (let i = 0; i < 10; i++) {
      if(i % 2 === 0){
         this.road = new Sprite(Assets.get('road'));
        }else {
          this.road = new Sprite(Assets.get('road2'));
      }
      this.road.x = i * 1500;
      this.road.y = 0;
      this.road.width = 1500;
      this.road.height = 150;
      this.platform.addChild(this.road); 
    }
    this._container.addChild(this.platform);
  }
}
