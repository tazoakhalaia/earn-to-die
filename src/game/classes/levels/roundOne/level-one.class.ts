import { Container, Graphics } from "pixi.js";

export class PlatformOne {
    private _container = new Container()
    private platform = new Container()
    get container() {
       return this._container
    }

    init() {
        this.renderPlatform()
    }

    renderPlatform() {
         this.platform = new Container()
         const platformG = new Graphics()
         platformG.beginFill('green')
         platformG.drawRect(0,600,1500,100)
         platformG.endFill()
         this.platform.addChild(platformG)
         this._container.addChild(this.platform)
    }
}