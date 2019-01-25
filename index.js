// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let distance = 42 - location;
  if (distance < 0) {
    return Math.abs(distance);
  } else {
    return distance;
  }
}

function distanceFromHqInFeet(location) {
  blocks = distanceFromHqInBlocks(location);
  return blocks * 264;
}

function distanceTravelledInFeet(start, end) {
  distance = start - end;
  if (distance < 0) {
    distance = Math.abs(distance);
  }
  return distance * 264;
}

function calculatesFarePrice(start, end) {
  distance = distanceTravelledInFeet(start, end)
  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
