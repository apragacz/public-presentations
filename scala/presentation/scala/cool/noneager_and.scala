def printableTrue = {
    println("hello, this is true")
    true
}
def printableFalse = {
    println("hello, this is false")
    false
}

def and(a: => Boolean, b: => Boolean) = {
    if(a) b else false
}

and(false, true) // returns false
and(false, false) // returns false
and(true, false) // returns false
and(true, true) // returns true

and(printableFalse, printableTrue)
// prints only "hello, this is false" and returns false
