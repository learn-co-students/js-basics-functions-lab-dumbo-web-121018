// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42)
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
    if (distanceTravelledInFeet(start, end) > 2500) {
      return 'cannot travel that far'
    } else if (distanceTravelledInFeet(start, end) >= 2000 && distanceTravelledInFeet(start, end) <= 2500) {
      return 25;
    } else {
       if (distanceTravelledInFeet(start, end) - 400 > 0 ) {
         return (distanceTravelledInFeet(start, end) - 400) * .02;
       } else {
         return 0;
       }
    }
}
