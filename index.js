// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  return Math.abs(someValue - 42);
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, destination) {
  const x = distanceTravelledInFeet(start, destination);
  switch (true) {
    case x <= 400:
      return 0;
      break;
    case x > 400 && x < 2000:
      return (x - 400) * 0.02;
      break;
    case x >= 2000 && x <= 2500:
      return 25;
      break;
    case x > 2500:
      return 'cannot travel that far';
      break;
  }
}
