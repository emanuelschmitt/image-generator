import wrap from "./ugly-wrap";
const d3 = require("d3");

let yTrack = 100;

const width = 240;
const height = 900;

const textToPlot = "THIS IS A TEST FOR RENDING ANY TEXT";

const plot = d3
  .select("body")
  .insert("svg")
  .attr("width", width)
  .attr("height", height);

plot
  .append("text")
  .attr("x", width / 2)
  .attr("y", yTrack)
  .attr("text-anchor", "middle")
  .attr("font-family", "Impact")
  .attr("font-size", 40)
  .text(textToPlot)
  .attr("shape-rendering", "geometricPrecision")
  .call(wrap, width);

let textHeight = parseInt(
  plot
    .select("text")
    .node()
    .getBoundingClientRect().height,
  10
);

plot.select("text").attr("transform", "translate(0, " + -textHeight / 2 + ")");

yTrack += parseInt(textHeight / 2, 10) + 10;
