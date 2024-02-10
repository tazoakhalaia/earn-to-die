import { Application, Assets, Container, Sprite } from "pixi.js";
import { GameComponent } from "./main.class";

export class GameCanvas {
    private _cotainer = new Container()
    private app:Application | undefined
    private img:any
    private game = new GameComponent()

    async init(){
       await Assets.loadBundle(['game'], (data) => {
        return data
       }).then(() => {
        this.app = new Application({
            width: 1500,
            height: 700,
            backgroundColor: 'blue'
        })
        document.querySelector('body')?.appendChild(this.app.view as unknown as HTMLElement)
        this.game.init()
        this.app.stage.addChild(this.game.container)
       })
        
    }
}