import { Wave } from "./wave";

export class WaveGroup {
  constructor() {
    this.totalWaves = 3;
    this.totalPoints = 8;

    this.color = [
      "rgba(60, 34, 233, 0.4)",
      "rgba(32, 103, 225, 0.4)",
      "rgba(37, 148, 222, 0.4)",
    ];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      this.waves[i].resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      this.waves[i].draw(ctx);
    }
  }
}
