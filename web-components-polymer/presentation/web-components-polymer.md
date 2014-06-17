## Web Components & Polymer

Andrzej Pragacz

## Web components

* basically, component-wise approach to the development.
* Still not widely implemented


## Web components current W3C spec

* Templates
* Decorators
* Shadow DOM
* Custom elements
* HTML Imports


## Template example

        <template id="commentTemplate">
            <div>
                <img src="">
                <div class="comment-text"></div>
            </div>
        </template>


## Using template

        function addComment(imageUrl, text) {
          var t = document.querySelector("#commentTemplate");
          var comment = t.content.cloneNode(true);
          // Populate content.
          comment.querySelector('img').src = imageUrl;
          comment.querySelector('.comment-text').textContent = text;
          document.body.appendChild(comment);
        }

* similar to cloning existing DOM elements
* the difference here is that template content is not the part of the DOM before cloning


## Decorators example

        <decorator id="details-open">
            <template>
                <a id="summary">
                  &blacktriangledown;
                  <content select="summary"></content>
                </a>
                <content></content>
            </template>
        </decorator>


## Using decorators

Applying the CSS rule:

        details[open] {
            decorator: url(#details-open);
        }

On following markup:

        <details open>
            <summary>Timepieces</summary>
            <ul>
              <li>Sundial
              <li>Cuckoo clock
              <li>Wristwatch
            </ul>
        </details>


## Using decorators (cont.)

...Will render something similar to this:

        <a id="summary">&blacktriangledown;Timepieces</a>
        <ul>
          <li>Sundial
          <li>Cuckoo clock
          <li>Wristwatch
        </ul>

So is the \<details\> tag in the DOM or not?


## Shadow DOM

* the concept of tree of trees

![](img/inception.jpg)

* Shadow host
* Shadow roots
* Insertion points


## Shadow DOM

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xl="http://www.w3.org/1999/xlink" version="1.1" viewBox="123 12 663 598" width="530" height="478"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:date>2013-07-12 01:16Z</dc:date><!-- Produced by OmniGraffle Professional 5.4.4 --></metadata><defs><filter id="Shadow" filterUnits="userSpaceOnUse"><feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="3.488"/><feOffset in="blur" result="offset" dx="0" dy="4"/><feFlood flood-color="black" flood-opacity=".75" result="flood"/><feComposite in="flood" in2="offset" operator="in"/></filter><filter id="Shadow_2" filterUnits="userSpaceOnUse"><feOffset in="SourceAlpha" result="offset" dx="0" dy="2"/><feFlood flood-color="black" flood-opacity=".4" result="flood"/><feComposite in="flood" in2="offset" operator="in"/></filter><font-face font-family="Helvetica" font-size="12" units-per-em="1000" underline-position="-75.683594" underline-thickness="49.316406" slope="0" x-height="522.94922" cap-height="717.28516" ascent="770.01953" descent="-229.98047" font-weight="500"><font-face-src><font-face-name name="Helvetica"/></font-face-src></font-face><marker orient="auto" overflow="visible" markerUnits="strokeWidth" id="FilledArrow_Marker" viewBox="-1 -4 10 8" markerWidth="10" markerHeight="8" color="black"><g><path d="M 8 0 L 0 -3 L 0 3 Z" fill="currentColor" stroke="currentColor" stroke-width="1"/></g></marker><marker orient="auto" overflow="visible" markerUnits="strokeWidth" id="FilledArrow_Marker_2" viewBox="-1 -4 10 8" markerWidth="10" markerHeight="8" color="#66f"><g><path d="M 8 0 L 0 -3 L 0 3 Z" fill="currentColor" stroke="currentColor" stroke-width="1"/></g></marker></defs><g stroke="none" stroke-opacity="1" stroke-dasharray="none" fill="none" fill-opacity="1"><title>Distributions</title><g><title>Trees</title><g><use xl:href="#id1424_Graphic" filter="url(#Shadow)"/><use xl:href="#id1427_Graphic" filter="url(#Shadow)"/><use xl:href="#id1441_Graphic" filter="url(#Shadow)"/><use xl:href="#id27_Graphic" filter="url(#Shadow_2)"/></g><g id="id1424_Graphic"><rect x="143" y="28.5" width="249" height="254.5" fill="white"/><rect x="143" y="28.5" width="249" height="254.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(148 33.5)" fill="black"><tspan font-family="Helvetica" font-size="12" font-weight="500" x="0" y="11" textLength="76.710938">document tree</tspan></text></g><g id="id1427_Graphic"><rect x="143" y="314" width="249" height="272" fill="white"/><rect x="143" y="314" width="249" height="272" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(148 319)" fill="black"><tspan font-family="Helvetica" font-size="12" font-weight="500" x="0" y="11" textLength="65.373047">shadow tree</tspan></text></g><g id="id1441_Graphic"><rect x="505" y="28.5" width="260.29468" height="439.5" fill="white"/><rect x="505" y="28.5" width="260.29468" height="439.5" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(510 33.5)" fill="black"><tspan font-family="Helvetica" font-size="12" font-weight="500" x="0" y="11" textLength="79.376953">composed tree</tspan></text></g><g id="id27_Graphic"><path d="M 418.74257 290.67712 L 418.97644 280.90258 L 469.28798 282.10636 L 469.53432 271.81066 L 484.14057 287.3518 L 468.80777 302.1766 L 469.0541 291.8809 Z" fill="black" fill-opacity=".1"/><path d="M 418.74257 290.67712 L 418.97644 280.90258 L 469.28798 282.10636 L 469.53432 271.81066 L 484.14057 287.3518 L 468.80777 302.1766 L 469.0541 291.8809 Z" stroke="black" stroke-opacity=".75" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g></g><g><title>Nodes</title><g><use xl:href="#id1318_Graphic" filter="url(#Shadow)"/><use xl:href="#id1207_Graphic" filter="url(#Shadow)"/><use xl:href="#id1205_Graphic" filter="url(#Shadow)"/><use xl:href="#id1203_Graphic" filter="url(#Shadow)"/><use xl:href="#id1257_Graphic" filter="url(#Shadow)"/><use xl:href="#id1256_Graphic" filter="url(#Shadow)"/><use xl:href="#id1254_Graphic" filter="url(#Shadow)"/><use xl:href="#id1253_Graphic" filter="url(#Shadow)"/><use xl:href="#id1433_Graphic" filter="url(#Shadow)"/><use xl:href="#id1435_Graphic" filter="url(#Shadow)"/><use xl:href="#id1437_Graphic" filter="url(#Shadow)"/><use xl:href="#id1439_Graphic" filter="url(#Shadow)"/><use xl:href="#id1447_Graphic" filter="url(#Shadow)"/><use xl:href="#id1450_Graphic" filter="url(#Shadow)"/><use xl:href="#id1451_Graphic" filter="url(#Shadow)"/><use xl:href="#id1452_Graphic" filter="url(#Shadow)"/><use xl:href="#id1457_Graphic" filter="url(#Shadow)"/><use xl:href="#id1458_Graphic" filter="url(#Shadow)"/><use xl:href="#id1462_Graphic" filter="url(#Shadow)"/><use xl:href="#id1463_Graphic" filter="url(#Shadow)"/><use xl:href="#id1464_Graphic" filter="url(#Shadow)"/><use xl:href="#id1466_Graphic" filter="url(#Shadow)"/><use xl:href="#id1467_Graphic" filter="url(#Shadow)"/><use xl:href="#id1468_Graphic" filter="url(#Shadow)"/></g><line x1="351.17557" y1="485.97503" x2="352.33774" y2="513.1368" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line x1="261.48423" y1="183.15432" x2="250.97123" y2="215.44271" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line x1="250.7648" y1="176.65342" x2="204.16006" y2="224.27147" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line x1="351.0015" y1="182.50001" x2="351.00298" y2="209.59999" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><g id="id1318_Graphic"><circle cx="351" cy="247" r="27.000044" fill="#008040"/><circle cx="351" cy="247" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><line x1="307.87901" y1="87.17598" x2="287.83063" y2="124.116" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line x1="329.52895" y1="89.15004" x2="339.40687" y2="119.436104" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><g id="id1207_Graphic"><circle cx="321" cy="63" r="27.000044" fill="#0080ff"/><circle cx="321" cy="63" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(295.4 56)" fill="white"><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x=".150390625" y="11" textLength="52.69922">document</tspan></text></g><g id="id1205_Graphic"><circle cx="351" cy="155" r="27.000044" fill="#008040"/><circle cx="351" cy="155" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><g id="id1203_Graphic"><circle cx="270" cy="157" r="27.000044" fill="#008040"/><circle cx="270" cy="157" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(249.4 143)" fill="white"><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x=".31933594" y="11" textLength="41.361328">shadow</tspan><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x="9.6591797" y="25" textLength="22.68164">host</tspan></text></g><line x1="249.76987" y1="478.15839" x2="205.15512" y2="523.7667" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line x1="274.29108" y1="485.48902" x2="279.8392" y2="513.78913" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line x1="294.97653" y1="392.11553" x2="282.63102" y2="423.66517" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><g id="id1257_Graphic"><circle cx="305" cy="366.5" r="27.000044" fill="#0080ff"/><circle cx="305" cy="366.5" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(284.4 352.5)" fill="white"><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x=".31933594" y="11" textLength="41.361328">shadow</tspan><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x="10.661133" y="25" textLength="20.677734">root</tspan></text></g><g id="id1256_Graphic"><circle cx="269" cy="458.5" r="27.000044" fill="#008040"/><circle cx="269" cy="458.5" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><g id="id1254_Graphic"><circle cx="287" cy="550.5" r="27.000044" fill="#008040"/><circle cx="287" cy="550.5" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><g id="id1253_Graphic"><circle cx="179" cy="550.5" r="27.000044" fill="red"/><circle cx="179" cy="550.5" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(156.4 536.5)" fill="white"><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x=".32128906" y="11" textLength="45.357422">insertion</tspan><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x="9.989258" y="25" textLength="26.021484">point</tspan></text></g><line x1="274.53182" y1="184.12616" x2="298.83685" y2="329.60917" marker-end="url(#FilledArrow_Marker_2)" stroke="#66f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" stroke-dasharray="4,4"/><text transform="translate(302.7937 293.50712)" fill="black"><tspan font-family="Helvetica" font-size="12" font-weight="500" x=".15917969" y="11" textLength="28.68164">hosts</tspan></text><g id="id1433_Graphic"><circle cx="178.00006" cy="251" r="27.000044" fill="#008040"/><circle cx="178.00006" cy="251" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(161.40006 244)" fill="white"><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x="4.2601563" y="11" textLength="24.679688">child</tspan></text></g><g id="id1435_Graphic"><circle cx="239.35779" cy="251" r="27.000044" fill="#008040"/><circle cx="239.35779" cy="251" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(222.75779 244)" fill="white"><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x="4.2601563" y="11" textLength="24.679688">child</tspan></text></g><g id="id1437_Graphic"><circle cx="350" cy="458.5" r="27.000044" fill="#008040"/><circle cx="350" cy="458.5" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><line x1="317.0806" y1="391.21261" x2="333.55023" y2="424.90366" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><g id="id1439_Graphic"><circle cx="354" cy="550.5" r="27.000044" fill="#008040"/><circle cx="354" cy="550.5" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><line x1="726.19067" y1="350.97438" x2="727.38075" y2="378.43492" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line x1="634.31203" y1="182.34579" x2="616.0489" y2="225.65553" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" stroke-dasharray="1,4"/><line x1="624.8693" y1="175.73555" x2="564.13084" y2="232.26452" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" stroke-dasharray="1,4"/><line x1="726" y1="182.50001" x2="726" y2="209.59999" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><g id="id1447_Graphic"><circle cx="726" cy="247" r="27.000044" fill="#008040"/><circle cx="726" cy="247" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><line x1="682.8823" y1="87.17776" x2="662.8389" y2="124.120485" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line x1="704.52735" y1="89.15056" x2="714.40344" y2="119.43722" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><g id="id1450_Graphic"><circle cx="696" cy="63" r="27.000044" fill="#0080ff"/><circle cx="696" cy="63" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(670.4 56)" fill="white"><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x=".150390625" y="11" textLength="52.69922">document</tspan></text></g><g id="id1451_Graphic"><circle cx="726" cy="155" r="27.000044" fill="#008040"/><circle cx="726" cy="155" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><g id="id1452_Graphic"><circle cx="645" cy="157" r="27.000044" fill="#008040"/><circle cx="645" cy="157" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(624.4 143)" fill="white"><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x=".31933594" y="11" textLength="41.361328">shadow</tspan><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x="9.6591797" y="25" textLength="22.68164">host</tspan></text></g><line x1="649.27007" y1="350.4931" x2="654.8526" y2="379.08655" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><g id="id1457_Graphic"><circle cx="644" cy="323.5" r="27.000044" fill="#008040"/><circle cx="644" cy="323.5" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><g id="id1458_Graphic"><circle cx="662" cy="415.80002" r="27.000044" fill="#008040"/><circle cx="662" cy="415.80002" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><g id="id1462_Graphic"><circle cx="544.00006" cy="251" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><g id="id1463_Graphic"><circle cx="605.3578" cy="251" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><g id="id1464_Graphic"><circle cx="725" cy="323.5" r="27.000044" fill="#008040"/><circle cx="725" cy="323.5" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><g id="id1466_Graphic"><circle cx="729" cy="415.80002" r="27.000044" fill="#008040"/><circle cx="729" cy="415.80002" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><g id="id1467_Graphic"><circle cx="542" cy="415.80002" r="27.000044" fill="#008040"/><circle cx="542" cy="415.80002" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(525.4 408.80002)" fill="white"><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x="4.2601563" y="11" textLength="24.679688">child</tspan></text></g><g id="id1468_Graphic"><circle cx="600" cy="415.80002" r="27.000044" fill="#008040"/><circle cx="600" cy="415.80002" r="27.000044" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><text transform="translate(583.4 408.80002)" fill="white"><tspan font-family="Helvetica" font-size="12" font-weight="500" fill="white" x="4.2601563" y="11" textLength="24.679688">child</tspan></text></g><line x1="623.6088" y1="341.95214" x2="569.73212" y2="390.70554" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line x1="632.16515" y1="348.33125" x2="616.1014" y2="382.03532" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line x1="644.83493" y1="184.49952" x2="644.22504" y2="286.10066" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line x1="656.913" y1="181.79386" x2="708.7996" y2="289.78269" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line x1="543.66634" y1="278.498" x2="542.4539" y2="378.40275" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" stroke-dasharray="1,4"/><line x1="604.4642" y1="278.48558" x2="601.2153" y2="378.41967" marker-end="url(#FilledArrow_Marker)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" stroke-dasharray="1,4"/><rect x="510.2891" y="297.58115" width="66" height="24" fill="white"/><text transform="translate(515.2891 302.58115)" fill="black"><tspan font-family="Helvetica" font-size="12" font-weight="500" x=".31738281" y="11" textLength="55.365234">distributed</tspan></text><text transform="translate(576.0725 283.53462)" fill="black"><tspan font-family="Helvetica" font-size="12" font-weight="500" x=".31738281" y="11" textLength="55.365234">distributed</tspan></text></g></g></svg>


## Custom elements registration


        document.registerElement('x-foo', {
            prototype: Object.create(HTMLParagraphElement.prototype, {
                firstMember: {
                    get: function() { return "foo"; },
                    enumerable: true,
                    configurable: true
                },
                // specify more members for your prototype.
                // ...
            }),
            extends: 'p'
        });

## Soo much stuff...

![](img/mind-blown.gif)


## Polymer

* Polyfill (shim) for web components
* Focused on compatibility, not on speed
* actually a bunch of


## Installing some components

* Installing polymer:

        bower install --save Polymer/polymer

* Installing core components:

        bower install --save Polymer/core-elements

* Installing other components:

        bower install --save Polymer/polymer-elements
        bower install --save Polymer/polymer-ui-elements

* Installing specific component

        bower install Polymer/polymer-ui-accordion


## Component-wise approach

        <!DOCTYPE html>
        <html>
          <head>
            <!-- 1. Load platform.js for polyfill support. -->
            <script src="bower_components/platform/platform.js"></script>

            <!-- 2. Use an HTML Import to bring in the element. -->
            <link rel="import"
                  href="bower_components/core-ajax/core-ajax.html">
          </head>
          <body>
            <!-- 3. Declare the element. Configure using its attributes. -->
            <core-ajax url="http://example.com/json"
                       handleAs="json"></core-ajax>

          </body>
        </html>

* core-ajax... wait, what?

## Component-wise approach

        // Wait for 'polymer-ready'. Ensures the element is upgraded.
        window.addEventListener('polymer-ready', function(e) {
            var ajax = document.querySelector('core-ajax');

            // Respond to events it fires.
            ajax.addEventListener('core-response', function(e) {
              console.log(this.response);
            });

            ajax.go(); // Call its API methods.
        });

## Building components

create elements/my-element.html

        <link rel="import" href="../bower_components/polymer/polymer.html">
        <link rel="import" href="../bower_components/core-ajax/core-ajax.html">

        <polymer-element name="my-element" noscript>
          <template>
            <span>I'm <b>my-element</b>. This is my Shadow DOM.</span>
            <core-ajax url="http://example.com/json" auto response="{{resp}}"></core-ajax>
            <textarea value="{{resp}}"></textarea>
          </template>
        </polymer-element>

That's it!

## Using built components

        <!DOCTYPE html>
        <html>
          <head>
            <!-- 1. Load platform support before any code that touches the DOM. -->
            <script src="bower_components/platform/platform.js"></script>
            <!-- 2. Load the component using an HTML Import -->
            <link rel="import" href="elements/my-element.html">
          </head>
          <body>
            <!-- 3. Declare the element by its tag. -->
            <my-element></my-element>
          </body>
        </html>

## Extending component prototype

        <polymer-element name="ready-element">
          <template>
            This element has a ready() method.
            <span id="el">Not ready...</span>
          </template>
          <script>
            Polymer('ready-element', {
              owner: "Goofy",
              ready: function() {
                this.$.el.textContent = this.owner +
                                        " is ready!";
              }
            });
          </script>
        </polymer-element>


## Polymer templates

* Polymer supports two-way bindings
* So in this example:

        <input id="nameInput" value="{{name}}">

* ... any change in the input will change the this.name value


## Polymer prototype elements
* callbacks: created, ready
* useful methods: fire
* somethingChanged watchers

        nameChanged: function() {
                if (this.name) {
                  // Insure name is capitalized
                  this.name = this.name[0].toUpperCase() +
                              this.name.slice(1);
                }
        },
* also possible to watch multiple properties by one callback (observe)

        observe: {
            foo: 'validate',
            bar: 'validate',
            'a.b.c': 'validate'
        },


## Polymer prototype elements

* Following node in template section:

        <input type="text" id="nameInput">

* maps to

        this.$.nameInput.value

## Sauce

* http://www.w3.org/TR/components-intro/
* http://w3c.github.io/webcomponents/
* http://css-tricks.com/modular-future-web-components/
* http://webcomponents.org/
* http://customelements.io/
* http://www.polymer-project.org/
* https://github.com/tastejs/todomvc/tree/gh-pages/architecture-examples/polymer/
