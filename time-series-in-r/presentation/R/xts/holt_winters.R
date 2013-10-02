SP_EW <- HoltWinters(SP500, alpha=0.1,
                     beta=FALSE, gamma=FALSE)
plot(as.zoo(cbind(SP_EW$x,SP_EW$fitted[,1])),
     screens=c(1,1),col=1:2)
