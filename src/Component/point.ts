class PointClass {
  index: number;
  x: number;
  y: number;
  fixedY: number;
  speed: number;
  cur: number;
  max: number;
  update: Function;
}

export const Point = (index: number, x: number, y: number) => {
  const PointState = new PointClass();
  PointState.x = x;
  PointState.y = y;
  PointState.fixedY = y;
  PointState.speed = 0.06;
  PointState.cur = index;
  PointState.max = Math.random() * 100 + 100;

  PointState.update = () => {
    PointState.cur += PointState.speed;
    PointState.y =
      PointState.fixedY + Math.sin(PointState.cur) * PointState.max;
  };

  return PointState;
};
