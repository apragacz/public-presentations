set.seed(1)
data <- c(20+rnorm(10),10+rnorm(10))
plot(data)

#consider following model:
# y(t) = s(t) + v(t)
# s(t) = s(t-1) + w(t)
# take s(0) ~ N(25,10) v(t) ~ N(0,2)
# w(t) ~ N(0,0.1)

data <- as.matrix(data)
ssRep <- SS(y=data,
            Fmat=function(tt,x,phi) return (matrix(1)),
            Gmat=function(tt,x,phi) return (matrix(1)),
            Wmat=function(tt,x,phi) return (matrix(0.1)),
            Vmat=function(tt,x,phi) return (matrix(2)),
            m0=matrix(25),
            C0=matrix(10))

ssRep.f <- kfilter(ssRep)
plot(ssRep$y)
lines(ssRep.f$m,lty=2)
