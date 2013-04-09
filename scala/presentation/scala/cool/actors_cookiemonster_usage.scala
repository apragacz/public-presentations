val cookieMonster1 = new CookieMonster(1)
val cookieMonster2 = new CookieMonster(2)

cookieMonster1.start
cookieMonster2.start

{
    cookieMonster1 ! Cookie()
    cookieMonster2 ! Carrot()
    cookieMonster2 ! Cookie()
    cookieMonster1 ! Cookie()
    cookieMonster1 ! Carrot()
    cookieMonster1 ! 1
}

/* prints something like this:
c1: Cookie!
c2: No Cookie, bleah!
c2: Cookie!
c1: Ate a cookie.
c1: Cookie!
c2: Ate a cookie.
c1: Ate a cookie.
c1: No Cookie, bleah!
c1: No Cookie, bleah!*/
