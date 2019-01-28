// Code your solution in this file!
function distanceFromHqInBlocks (location) {
  return Math.abs(42-location)
  //returns the number of blocks given a value
}

function distanceFromHqInFeet(location){

  return 264 * distanceFromHqInBlocks(location);


}

function distanceTravelledInFeet(location, destination) {
  return 264 * Math.abs(destination - location)
}

function calculatesFarePrice(start, destination){


}
function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
