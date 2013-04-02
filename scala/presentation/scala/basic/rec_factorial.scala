// this will fail
def factorial(n: Int) = {
    if (n > 0 ) n * factorial(n - 1) else 1
}

// this is ok
def factorial(n: Int): Int = {
    if (n > 0 ) n * factorial(n - 1) else 1
}
