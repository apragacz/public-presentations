SP <- read.table("SP500.csv", header=TRUE, sep=",")
library(xts)
Index <- as.Date(SP$Date, "%Y-%m-%d")
SP500 <- xts(SP$Close, Index)
