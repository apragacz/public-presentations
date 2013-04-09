def myWhile(cond: => Boolean)(stmt: => Unit) : Unit = {
    if(cond) {
        stmt
        myWhile(cond)(stmt)
    } else ()
}

var counter = 0

counter = 5

myWhile(counter > 0) {
    counter -= 1
    println("blah")
}
// prints "blah" five times
