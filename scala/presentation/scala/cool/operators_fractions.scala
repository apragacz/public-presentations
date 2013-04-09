class Fraction(x: Int, y: Int) {
    def this(x: Int) = this(x, 1)

    private def gcd(a: Int, b: Int): Int = {
        if (b == 0) a else gcd(b, a % b)
    }

    val num = x / gcd(x,y)
    val denom = y / gcd(x,y)

    override def toString = num + "/" + denom
    def toDouble = num.toDouble / denom.toDouble

    def +(b: Fraction) = {
        new Fraction(num * b.denom + b.num * denom,
                     denom * b.denom)
    }
    def *(b: Fraction) = {
        new Fraction(num * b.num, denom * b.denom)
    }

    def +/+(b: Fraction) = {
        new Fraction(num + b.num, denom + b.denom)
    }

    def unary_- = new Fraction(-num, denom)
}
