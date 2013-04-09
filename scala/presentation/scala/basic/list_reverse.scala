def reverse(list: List[Any]) = {
    def helper(list: List[Any], acc: List[Any]): List[Any] = {
        if (list.isEmpty)
            acc
        else
            helper(list.tail, list.head :: acc)
    }
    helper(list, List())
}

reverse(List("a"):::List("b", "c"))
// returns List(c, b, a)

reverse(Range(0,9).toList)
// returns List(8, 7, 6, 5, 4, 3, 2, 1, 0)
