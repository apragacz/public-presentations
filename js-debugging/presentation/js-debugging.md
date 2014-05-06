Debugging w JS
==============


Debugging
---------
* Chrome
* Firefox
* Firebug - wtyczka do FF (z czasów gdy debuger FF nie nadawał się do niczego)
* Firebug lite
* Opera dragonfly (nie uruchamia się F12 :( )


alert() AKA Wejski debugging
----------------------------
* Używać tylko kiedy nic innego nie działa


console object
--------------
* console.log
* ala także console.debug, console.info, console.error, console.warn
* wiele parametrów, różne znaczenia

      console.log('this is my object: ', myobject)

      console.log("%s has %d points", "Sam", "100")

* console.error ma dodatkowo stacktrace pod chrome
* uwaga na stan przy dumpowaniu obiektów
* konkatenacja - zdefiniowane toString
* dobrze mieć shim


console object - advanced (Chrome, Firebug)
-------------------------------------------
* console.trace() - stacktrace
* console.assert(warunek, "komunikat"), daje stacktrace
* console.dir - robi prawie to samo co console.log (ale w chrome jest różnica dla DOM elementów)
* console.count("Exception") -> Exception 1, Exception 2,...
* console.time("Array initialize"); ... console.timeEnd("Array initialize");
* and many more...

Konsola (Chrome)
----------------
* $('selektor'); - zwraca pierwszy element spełniający selektor. UWAGA, jquery nadpisuje!
* $$('selektor') - zwraca listę elementół

Breakpoints
-----------
* kontekst także w konsoli
* warunkowe breakpointy
* debugger - dobre na "skaczące" breakpointy, nie działa z wyłączonym debuggerem

Source maps
-----------
* FF, Chrome ma obsługę
* Coffeescript >= 1.6
* Less compiler >= 1.5
* Closure, UglifyJS ma forka
* ktoś używa?


Inne
----
* watching variables
* windows.onerror (raven.js)


Chrome debugging
----------------
* console style formatting

        console.log("%cThis will be formatted with large, blue text", "color: blue; font-size: x-large");

* deactivate breakpoints (działa też na polecenie debugger)
* pause on exceptions
* source maps
* omit library code while debugging (niestety nie filtruje stacktrace)
  * chrome://flags/ -> Enable Developer Tools experiments
* async debugging (Chrome >= 35.0)


Firebug lite
------------
* bookmarklet
* wkejka:

        <script type="text/javascript" src="https://getfirebug.com/firebug-lite.js"></script>

  (działa pod chromem po wciśnięciu F12)


Źródła
------
* [Chrome JS debugging](https://developers.google.com/chrome-developer-tools/docs/javascript-debugging)
* [Firefox JS debugging](https://developer.mozilla.org/en-US/docs/Tools/Debugger)
* [Chrome console](https://developers.google.com/chrome-developer-tools/docs/console)
* [Firebug wiki](https://getfirebug.com/wiki/index.php/)
* [Firebug Lite](https://getfirebug.com/firebuglite)
* [Ignoring library code in chrome debugger](http://www.divshot.com/blog/tips-and-tricks/ignoring-library-code-while-debugging-in-chrome)
* [Async debugging in Chrome](http://www.html5rocks.com/en/tutorials/developertools/async-call-stack/)
* [Introduction to sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)
