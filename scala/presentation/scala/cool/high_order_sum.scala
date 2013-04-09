List(1,4,5).map(x => x * x).reduceLeft((x, acc) => x + acc)
// returns 42
