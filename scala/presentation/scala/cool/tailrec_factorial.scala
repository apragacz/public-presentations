def factorial(n: Int) = {
    def helper(n: Int, acc: Int) : Int = {
        if (n > 0) helper(n - 1, acc * n) else acc
    }
    helper(n, 1)
}
