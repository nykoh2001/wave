import { Wave } from "./wave.ts";

class waveGroupClass {
  totalWaves: number;
  totalPoints: number;
  color: string[] = [];
  waves: Wave[] = [];
  resize: Function;
  draw: Function;
}

export const WaveGroup = () => {
  const waveGroupState = new waveGroupClass();
  waveGroupState.totalWaves = 3;
  waveGroupState.totalPoints = 8;

  waveGroupState.color = [
    "rgba(60, 34, 233, 0.4)",
    "rgba(32, 103, 225, 0.4)",
    "rgba(37, 148, 222, 0.4)",
  ];

  for (let i = 0; i < waveGroupState.totalWaves; i++) {
    const wave = Wave(i, waveGroupState.totalPoints, waveGroupState.color[i]);
    waveGroupState.waves[i] = wave;
  }

  waveGroupState.resize = (stageWidth: number, stageHeight: number) => {
    for (let i = 0; i < waveGroupState.totalWaves; i++) {
      waveGroupState.waves[i].resize(stageWidth, stageHeight);
    }
  };

  waveGroupState.draw = (ctx) => {
    for (let i = 0; i < waveGroupState.totalWaves; i++) {
      waveGroupState.waves[i].draw(ctx);
    }
  };

  return waveGroupState;
};
