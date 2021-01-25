// JS Goes here - ES6 supported
import "./css/main.css";
import "./scss/colors.scss";

import $ from "jquery";

import { Tooltip } from "bootstrap";

import "particles.js/particles";

$(() => {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load("particles-js", "assets/particles.json");

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var _ = tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl, {
    boundary: "window",
    container: "body"
  }));
});
