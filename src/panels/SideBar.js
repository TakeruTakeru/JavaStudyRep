import React from "react";
import GoldenLayoutManager from "panels/GoldenLayoutManager";

class SideBar extends React.PureComponent {
  componentDidMount() {
    let addMenuItem = text => {
      var element = document.createElement("li");
      element.textContent = text;
      document.getElementById("menu-container").append(element);
      element.addEventListener("click", e => {
        GoldenLayoutManager.openPanel(e.target.innerText);
      });
    };
    addMenuItem("hogeA");
    addMenuItem("hogeB");
  }
  render() {
    return (
      <div>
        <ul id="menu-container" />
      </div>
    );
  }
}

export default SideBar;
