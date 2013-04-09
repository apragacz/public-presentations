import scala.collection.immutable.HashMap

abstract class Expr {}
case class Var(n: String) extends Expr {}
case class Val(v: Double) extends Expr {}
case class Oper(op: TwoArgOperator, l: Expr, r: Expr) extends
Expr {}

def eval(e: Expr, vars: Map[String, Double]): Double = {
    e match {
        case Var(n) => vars(n)
        case Val(v) => v
        case Oper(op, l, r) => op(eval(l, vars),
                                  eval(r, vars))
    }
}

val e = Oper(add, Var("a"), Oper(mul, Var("b"), Val(5)))
eval(e, HashMap.empty + (("a",2), ("b", 11)))
// returns 57.0
