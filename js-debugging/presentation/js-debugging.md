Debugging w JavaScripcie
========================


Debugging tools
---------------
* Chrome developer tools
* Firefox developer tools
* Firebug - wtyczka do FF (z czasów gdy debugger FF nie nadawał się do niczego)
* Firebug lite
* Opera dragonfly


alert() aka Wejski debugging
----------------------------
* Używać tylko kiedy nic innego nie działa...
* ...czyli w praktyce nigdy


console object
--------------
* console.log
* ...ale także console.debug, console.info, console.error, console.warn
* wiele parametrów, różne znaczenia

        console.log('this is my object: ', myobject)

        console.log("%s has %d points", "Sam", "100")

* console.error ma dodatkowo stacktrace pod chrome
* uwaga na stan przy dumpowaniu obiektów
* konkatenacja - zdefiniowane toString
* dobrze mieć shim - IE


console object - advanced stuff (Chrome, Firefox, Firebug)
----------------------------------------------------------
* console.trace() - stacktrace
* console.assert(warunek, "komunikat"), daje stacktrace
* console.dir - robi prawie to samo co console.log (ale w chrome jest różnica dla DOM elementów)
* console.count("Exception") -> Exception 1, Exception 2,...
* console.time("Array initialize"); ... console.timeEnd("Array initialize");
* and many more...

Breakpoints
-----------
* watch expressions
* kontekst także w konsoli
* warunkowe breakpointy
* debugger - dobre na "skaczące" breakpointy, nie działa z wyłączonym debuggerem


Breakpoints (Chrome, Firefox)
-----------------------------
* pause on (uncaught) exceptions
* deactivate breakpoints
  * w chrome działa też na polecenie debugger
  * w FF 29 aktualnie nie


Selektory (Chrome, Firefox)
---------------------------
* $('selektor'); - zwraca pierwszy element spełniający selektor. UWAGA, jquery nadpisuje!
* $$('selektor') - zwraca listę elementów


Source maps (Chrome, Firefox)
-----------------------------
* Coffeescript >= 1.6
* Less compiler >= 1.5 (dużo opcji)
* Closure, UglifyJS ma forka
* ktoś używa?


Source blackboxing
------------------
* omija kod przy stepowaniu
* FF - klik i gotowe
* w Chrome <= 34.0 eksperymentalne:
  * chrome://flags/ -> Enable Developer Tools experiments
  * omit library code while debugging (niestety nie filtruje stacktrace)


window.onerror
--------------
* wykorzystywane np. w raven.js


Chrome debugging
----------------
* console style formatting

        console.log("%cThis will be formatted with large, blue text",
                    "color: blue; font-size: x-large");

* async debugging (Chrome >= 35.0)


Firebug lite
------------
* bookmarklet
* wkejka:

        <script type="text/javascript" src="https://getfirebug.com/firebug-lite.js"></script>

  (działa pod chromem po wciśnięciu F12)


Sauce
-----
* [Chrome JS debugging](https://developers.google.com/chrome-developer-tools/docs/javascript-debugging)
* [Firefox JS debugging](https://developer.mozilla.org/en-US/docs/Tools/Debugger)
* [Chrome console](https://developers.google.com/chrome-developer-tools/docs/console)
* [Firebug wiki](https://getfirebug.com/wiki/index.php/)
* [Firebug Lite](https://getfirebug.com/firebuglite)
* [Ignoring library code in chrome debugger](http://www.divshot.com/blog/tips-and-tricks/ignoring-library-code-while-debugging-in-chrome)
* [Async debugging in Chrome](http://www.html5rocks.com/en/tutorials/developertools/async-call-stack/)
* [Introduction to sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)


Dyskusja
--------
