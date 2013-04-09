abstract class TwoArgOperator {
    def apply(x: Double, y: Double): Double
}

class Add extends TwoArgOperator {
    def apply(x: Double, y: Double) = x + y
}

class Mul extends TwoArgOperator {
    def apply(x: Double, y: Double) = x * y
}

val add = new Add
val mul = new Mul
mul(2,3) // returns 6
