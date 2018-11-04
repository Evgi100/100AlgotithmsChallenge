function tasksTypes(deadlines: number[], day: number): number[] {
  var taskNumArr = [];

  var todayCount = 0;
  var upcomingCount = 0;
  var laterCount = 0;

  for (let deadline of deadlines) {
    if (deadline <= day) {
      todayCount++;
    } else if (deadline > day + 7) {
      laterCount++;
    } else {
      upcomingCount++;
    }
  }

  taskNumArr.push(todayCount);
  taskNumArr.push(upcomingCount);
  taskNumArr.push(laterCount);

  return taskNumArr;
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));

// -   If the task is due today or it's already overdue, it is labeled as Today;
// -   If the task is due within a week but not today - that is, its deadline is somewhere between day + 1 and day + 7 both inclusive - it is labeled as Upcoming;
// -   All other tasks are labeled as Later;

// Given an array of deadlines and today's date day, your goal is to find the number of tasks with each label type and return it as an array with the format [Today, Upcoming, Later], where Today, Upcoming and Later are the number of tasks that correspond to that label.

// **Example**
// -   For deadlines = [1, 2, 3, 4, 5] and day = 2, the output should be
// tasksTypes(deadlines, day) = [2, 3, 0].
