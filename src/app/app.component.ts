import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Application, Assets } from 'pixi.js';
import { GameCanvas } from '../game/classes/game-canvas.class';
import { GameManifest } from '../game/game-manifest';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Game-pixi';

  canvas = new GameCanvas();
  constructor() {
    Assets.addBundle('game', GameManifest);
    this.canvas.init();
  }
}
