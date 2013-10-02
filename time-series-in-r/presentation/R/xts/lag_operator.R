x <- 1:10
lag(x,1)
# Output:
# [1]  1  2  3  4  5  6  7  8  9 10
# attr(,"tsp")
# [1] 0 9 1

lag.xts(x,1)
# Output:
# [1] NA  1  2  3  4  5  6  7  8  9
