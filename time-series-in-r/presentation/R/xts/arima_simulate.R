ar <- arima.sim(n=252,list(ar=c(1.5,-0.75)))
ar_xts <- as.xts(ar)
plot(ar)
