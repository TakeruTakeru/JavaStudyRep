import React from "react";
import { openPanel } from "panels/panelDefs";


class SideBar extends React.PureComponent {

    render () {
        return (
            <div>
                <ul id="menu-container" />
            </div>
        )
    }
}

export default SideBar;