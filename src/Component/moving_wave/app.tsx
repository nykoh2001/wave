import React from "react";
import { WaveGroup, Wave } from "./WaveGroup";

interface WaveGroup {
  totalWaves: number;
  totalPoints: number;
  color: string[];
  waves: Wave[];
  resize: Function;
  draw: Function;
}

class App {
  canvas: any;
  ctx: any;
  waveGroup: WaveGroup;
  stageWidth: number = 0;
  stageHeight: number = 0;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.waveGroup = WaveGroup();

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();
    requestAnimationFrame(this.animate.bind(this));
  }
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.waveGroup.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
