ar_est <- ar.ols(SP500)
arima_est <- arima(returns,c(1,0,0))
arima_est2 <- arima(returns,c(1,0,0),include.mean=FALSE)