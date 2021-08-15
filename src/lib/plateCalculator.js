function calculateWeights({ desiredWeight, barWeight, plateInventory }) {
  desiredWeight = parseInt(desiredWeight, 10);
  barWeight = parseInt(barWeight, 10);
  if (desiredWeight - barWeight < 0) return false;
  let weightsNeeded = {
    plates: [],
    closestWeight: 0,
  };

  let weight = desiredWeight - barWeight;
  weightsNeeded.closestWeight = barWeight;
  for (var set of Object.entries(plateInventory).sort((a, b) => {
    if (parseInt(a[0]) < parseInt(b[0])) {
      return 1;
    } else {
      return -1;
    }
  })) {
    let numPlates = 2 * Math.floor(weight / set[0] / 2);
    if (set[1] >= numPlates) {
      // Only add to the array if the weights are needed
      if (numPlates === 0) continue;
      plateInventory[set[0]] -= numPlates;
      weightsNeeded.plates.push({ plateWeight: set[0], qty: numPlates });
      weightsNeeded.closestWeight += set[0] * numPlates;
      weight -= set[0] * numPlates;
    } else {
      // TODO: Add logic here to only return an even number of plates
      plateInventory[set[0]] = 0;
      weightsNeeded.plates.push({ plateWeight: set[0], qty: set[1] });
      weightsNeeded.closestWeight += set[0] * set[1];
      weight -= set[0] * set[1];
    }
  }
  if (
    parseInt(weightsNeeded.closestWeight, 10) === parseInt(desiredWeight, 10)
  ) {
    weightsNeeded.exactWeight = true;
  }
  return weightsNeeded;
}

export default calculateWeights;
