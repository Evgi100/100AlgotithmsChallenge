function fareEstimator(
  ride_time: number,
  ride_distance: number,
  cost_per_minute: number[],
  cost_per_mile: number[]
): number[] {
  const fareEstimator = [];
  for (let i = 0; i < cost_per_minute.length; i++) {
    let totalTimeCost = ride_time * cost_per_minute[i];
    let totalMilesCost = ride_distance * cost_per_mile[i];
    let total = totalMilesCost + totalTimeCost;
    fareEstimator.push(total);
  }

  return fareEstimator;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));

// (Cost per minute) * (ride time) + (Cost per mile) * (ride distance)
