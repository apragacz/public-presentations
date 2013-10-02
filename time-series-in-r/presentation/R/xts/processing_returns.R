returns <- 100 * diff(log(SP500))
hist(returns)
plot(density(returns))
boxplot(as.vector(returns))
