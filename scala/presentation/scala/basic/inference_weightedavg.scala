def add (a: Double, b: Double) = a + b

def weightedAvg (t: Double) (a: Double, b: Double) = {
    add(a * (1.0 - t), b * t)
}

val someAvg = weightedAvg(0.5) (2,7)
