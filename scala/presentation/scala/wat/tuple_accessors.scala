val tup = (1,2,3)

tup._1  // accessing first element

tup._2 // accessing second element

tup._3 // accessing last element

tup.productArity // tuple length

val tup22 = (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22) // ok

val tup23 = (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23)
// error: object Tuple23 is not a member of package scala (2.9.2)
