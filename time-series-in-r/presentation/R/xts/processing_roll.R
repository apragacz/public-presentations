roll_mean <- function(x,m) rollapply(x,m,mean,align="right")
roll_sd <- function(x,m) rollapply(x,m,sd,align="right")
plot(roll_mean(SP500, 50),type="l")
plot(roll_sd(SP500,50),type="l")