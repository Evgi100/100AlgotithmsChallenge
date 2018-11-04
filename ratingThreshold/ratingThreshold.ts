function ratingThreshold(threshold: number, ratings: number[][]): number[] {
  const reviews = [];

  for (let i = 0; i < ratings.length; i++) {
    let totalRating = 0;
    for (let rating of ratings[i]) {
      totalRating += rating;
    }
    if(totalRating/ratings[i].length<threshold){
        reviews.push(i)
    }
  }

  return reviews;
}

console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]));
