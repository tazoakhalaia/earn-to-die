import { Assets, Container, Graphics, Sprite, Text } from 'pixi.js';

export class Map {
  private readonly CANVAS_WIDTH = 1500;
  private readonly CANVAS_HEIGHT = 700;
  private readonly GARAGE_CON_WIDTH = 400
  private _container = new Container();
  private map: Sprite | undefined;
  private menuContainer = new Container();
  private garageContainer = new Container()
  get container() {
    return this._container;
  }

  init() {
    this.menuContainer.width = 250;
    this.menuContainer.height = 90;
    this.menuContainer.x = 40;
    this.menuContainer.y = 25;
    this.garageContainer.width = this.GARAGE_CON_WIDTH
    this.garageContainer.height = 90
    this.garageContainer.x = 1062
    this.garageContainer.y = 25
    this.renderMap();
    this.mapCBorder();
    this.mapTextC();
    this.mapText();
    this.garageBorder()
    this.garage()
    this.rightArrow()
    this.garageText()
    this.garageClick()
  }

  renderMap() {
    this.map = new Sprite(Assets.get('map'));
    this.map.width = this.CANVAS_WIDTH;
    this.map.height = this.CANVAS_HEIGHT;
    this._container.addChild(this.map);
  }

  mapTextC() {
    const background = new Container();
    const menuGraphics = new Graphics();
    menuGraphics.beginFill('#8c7655');
    menuGraphics.drawRoundedRect(0, 0, 240, 80, 30);
    menuGraphics.endFill();
    background.x = this.menuContainer.width / 2 - menuGraphics.width / 2;
    background.y = this.menuContainer.height / 2 - menuGraphics.height / 2;
    background.addChild(menuGraphics);
    this.menuContainer.addChild(background);
    this._container.addChild(this.menuContainer);
  }

  mapCBorder() {
    const borderC = new Container();
    const border = new Graphics();
    border.beginFill('#cbab7a');
    border.drawRoundedRect(0, 0, 250, 85, 30);
    border.endFill();
    borderC.addChild(border);
    this.menuContainer.addChild(borderC);
    this._container.addChild(this.menuContainer);
  }


  mapText() {
    const menu = new Text('Map', {
      fontSize: 46,
      fill: '#ddd1a8',
    });
    menu.position.set(
      this.menuContainer.width / 2 - menu.width / 2,
      this.menuContainer.height / 2 - menu.height / 2
    );
    this.menuContainer.addChild(menu);
  }

  garage() {
    const background = new Graphics();
    background.beginFill('#8c7655');
    background.drawRoundedRect(0, 0, this.GARAGE_CON_WIDTH, 80, 30);
    background.endFill();
    background.x = this.garageContainer.width / 2 - background.width / 2;
    background.y = this.garageContainer.height / 2 - background.height / 2;
    this.garageContainer.addChild(background)
    this._container.addChild(this.garageContainer)
  }

  garageBorder() {
    const border = new Graphics();
    border.beginFill('#cbab7a');
    border.drawRoundedRect(0, 0, 415, 85, 30);
    border.endFill();
    this.garageContainer.addChild(border)
    this._container.addChild(this.garageContainer)
  }

  rightArrow() {
    const arrow = new Sprite(Assets.get('rightArrow'));
    arrow.width = 50
    arrow.height = 45
    arrow.position.set(
      30,
      this.garageContainer.height / 2 - arrow.height  / 2
    )
    this.garageContainer.addChild(arrow)
  }

  garageText() {
    const text = new Text('Garage', {
      fontSize: 46,
      fill: '#fff'
    })
    text.position.set(
      this.garageContainer.width / 2 - text.width / 2,
      this.garageContainer.height / 2 - text.height / 2
    )
    this.garageContainer.addChild(text)
  }

  garageClick = () => {
    this.garageContainer.eventMode = 'dynamic'
    this.garageContainer.cursor = 'pointer'
    this.garageContainer.addEventListener('pointerup', () => {
      console.log('garage');
      
    })
  }

}
