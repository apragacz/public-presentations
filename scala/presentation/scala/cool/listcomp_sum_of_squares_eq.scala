val list = Range(1,11).toList

for {
    i <- list; j <- list
    val x = i*i + j*j
    if i < j
    if x == 80
} yield (i,j)
// returns List((4,8))
