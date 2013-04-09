class Food {}
case class Cookie extends Food{}
case class Carrot extends Food{}

import scala.actors.Actor
import scala.actors.Actor._

class CookieMonster(val id: Int) extends Actor {
    def act {
        loop {
            react {
                case Cookie() => {
                    println("c" + id +  ": Cookie!")
                    Thread.sleep(1000)
                    println("c" + id +  ": Ate a cookie.")

                }
                case _ => {
                    println("c" + id +  ": No Cookie, bleah!")
                }
            }
        }
    }
}

