def reverse(s: String) : String =
(for(i <- s.length - 1 to 0 by -1) yield s(i)).mkString
