import { Point } from "./point.js";

class waveStateClass {
  index: number;
  color: string;
  points: Point[] = [];
  stageWidth: number;
  stageHeight: number;
  centerX: number;
  centerY: number;
  pointGap: number;
  prevX: number;
  prevY: number;
  totalPoints: number;
  resize: Function;
  draw: Function;
}

export const Wave = (
  index: number,
  totalPoints: number,
  color: string
): waveStateClass => {
  const waveState = new waveStateClass();
  waveState.points = [];
  waveState.index = index;
  waveState.totalPoints = totalPoints;
  waveState.color = color;

  waveState.resize = (stageWidth: number, stageHeight: number) => {
    waveState.stageWidth = stageWidth;
    waveState.stageHeight = stageHeight;

    waveState.centerX = stageWidth / 2;
    waveState.centerY = stageHeight / 2;

    waveState.pointGap = waveState.stageWidth / (waveState.totalPoints - 1);

    init();
  };

  const init = () => {
    const point = new Point(waveState.centerX, waveState.centerY);
    for (let i = 0; i < waveState.totalPoints; i++) {
      const point = new Point(
        waveState.index + i,
        waveState.pointGap * i,
        waveState.centerY
      );
      waveState.points[i] = point;
    }
  };

  waveState.draw = (ctx) => {
    ctx.beginPath();
    ctx.fillStyle = waveState.color;

    waveState.prevX = waveState.points[0].x;
    waveState.prevY = waveState.points[0].y;
    ctx.moveTo(waveState.prevX, waveState.prevY);

    for (let i = 1; i < waveState.totalPoints; i++) {
      if (i < waveState.totalPoints - 1) {
        waveState.points[i].update();
      }
      const cx = (waveState.prevX + waveState.points[i].x) / 2;
      const cy = (waveState.prevY + waveState.points[i].y) / 2;

      ctx.quadraticCurveTo(waveState.prevX, waveState.prevY, cx, cy);

      waveState.prevX = waveState.points[i].x;
      waveState.prevY = waveState.points[i].y;
    }

    ctx.lineTo(waveState.prevX, waveState.prevY);
    ctx.lineTo(waveState.stageWidth, waveState.stageHeight);
    ctx.lineTo(waveState.points[0].x, waveState.stageHeight);

    ctx.fill();
    ctx.closePath();
  };

  return waveState;
};
