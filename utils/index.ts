const randomInt = (min: number, max: number) => {
  const ceil = Math.ceil(min);
  const floor = Math.floor(max);
  return Math.floor(Math.random() * (floor - ceil)) + ceil;
}

export default randomInt;
