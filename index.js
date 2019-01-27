// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
  let distance;
  // distance = Math.abs(someValue - 42);
  if (someValue >= 42)
    distance = someValue - 42;
  else
    distance = 42 - someValue;
  return distance;
}

function distanceFromHqInFeet(someValue) {
  let distance;
  distance = distanceFromHqInBlocks(someValue)*264;
  return distance;
}

function distanceTravelledInFeet(start, destination){
  let distance;
  distance = Math.abs((destination - start)*264);
  return distance;
}

function calculatesFarePrice(start, destination){
  let fare;
  let message;
  distance = distanceTravelledInFeet(start, destination);
  if (distance > 2500)
    fare = "cannot travel that far";
  else if (distance > 2000)
    fare = 25;
  else if (distance > 400)
    fare = 0.02 * (distance - 400);
  else fare = 0;
  return fare;
}
