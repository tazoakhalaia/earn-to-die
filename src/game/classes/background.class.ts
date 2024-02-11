import { Assets, Container, Sprite } from "pixi.js";

export class Background {
    private _container = new Container()
    get container() {
        return this._container
    }
    init() {
        this.background()
    }

    background() {
        const back = new Sprite(Assets.get('background'))
        back.width = 1500
        back.height = 700
        back.x = 0
        back.y = 0
        this._container.addChild(back)
    }
}