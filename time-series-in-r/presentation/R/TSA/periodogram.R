t <- 1:100
cos1 <- cos(2*pi*t*5/100)
cos2 <- cos(2*pi*t*15/100+0.2)
y <- 2 * cos1 + 3 * cos2
plot(t,y,type="o")
periodogram(y)
