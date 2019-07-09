import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function init() {
    window.React = React;
    window.ReactDOM = ReactDOM;
    window.$ = $;
}

export { init };