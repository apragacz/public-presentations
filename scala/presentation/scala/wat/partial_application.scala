def evaluate_quadratic(a: Double, b: Double, c: Double)
    (x: Double) = {
        a * x * x + b * x + c
}

def qd1 = evaluate_quadratic(1,0,1) // this will fail with:
// error: missing arguments for method evaluate_quadratic
// in object $iw;
// follow this method with `_' if you want to treat it
// as a partially applied function


def qd2 = evaluate_quadratic(1,0,1) _ // this is ok

def qd3: Double => Double = evaluate_quadratic(1,0,1)
// buth this is also ok

