// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

;("use strict")

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-02-HTML/sw.js", {
    scope: "/ICS2O-Unit-5-02-HTML/",
  })
}

/**
 * This function compares slider with random number.
 */
function myButtonClicked() {
  var sideA = document.getElementById("sideA").value
  var sideB = document.getElementById("sideB").value
  var sideC = document.getElementById("sideC").value

  // process
  if (sideA == sideB && sideB == sideC) {
      document.getElementById("answer").innerHTML= "Triangle is an equilateral."
  } else if ( sideA == sideB || sideB == sideC || sideA == sideC) {
      document.getElementById("answer").innerHTML= "Triangle is an isosceles."
  } else {
      document.getElementById("answer").innerHTML= "Triangle is an scalene."
  }
}