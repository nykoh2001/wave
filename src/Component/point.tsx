class PointClass {
  index: number = 0;
  x: number = 0;
  y: number = 0;
  fixedY: number = 0;
  speed: number = 0;
  cur: number = 0;
  max: number = 0;
  update: Function = () => {};
}

const Point = (index: number, x: number, y: number) => {
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

export default Point;