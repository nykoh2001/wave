import React from "react";
import Point from "./point";

export interface Point {
  index: number;
  x: number;
  y: number;
  fixedY: number;
  speed: number;
  cur: number;
  max: number;
  update: Function;
}

class waveStateClass {
  index: number = 0;
  color: string = "";
  points: Point[] = [];
  stageWidth: number = 0;
  stageHeight: number = 0;
  centerX: number = 0;
  centerY: number = 0;
  pointGap: number = 0;
  prevX: number = 0;
  prevY: number = 0;
  totalPoints: number = 0;
  resize: Function = function () {};
  draw: Function = function () {};
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
    for (let i = 0; i < waveState.totalPoints; i++) {
      const point = Point(
        waveState.index + i,
        waveState.pointGap * i,
        waveState.centerY
      );
      waveState.points[i] = point;
    }
  };

  waveState.draw = (ctx: any) => {
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
