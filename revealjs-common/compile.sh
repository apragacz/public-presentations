#!/bin/bash

pandoc --section-divs -t html5 -s --template "../../revealjs-common/template.revealjs" -o index.html $1
