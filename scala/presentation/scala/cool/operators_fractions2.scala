//...

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
