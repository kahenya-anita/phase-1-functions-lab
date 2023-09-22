// Code your solution in this file!
function distanceFromHqInBlocks(dst) {
  if (dst > 42) {
    return dst - 42;
  } else {
    return 42 - dst;
  }
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start < end) {
    return (end - start) * 264;
  } else {
    return (start - end) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const dst = distanceTravelledInFeet(start, destination);

  if (dst <= 400) {
    return 0;
  } else if (dst > 400 && dst <= 2000) {
    return ((dst - 400) * 2) / 100;
  } else if (dst > 2000 && dst < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
