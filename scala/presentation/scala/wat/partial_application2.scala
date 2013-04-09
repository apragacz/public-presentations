def powerOfTwo = math.pow(2.0, _) // fails
def cube = math.pow(_, 3) // fails

def powerOfTwo: Double => Double = math.pow(2.0, _) // ok
def cube: Double => Double = math.pow(_, 3) // ok
