import React from "react";
import { Icon } from "antd";

const FolderIcon = props => {
    const { isOpen } = props;
    const CstmIcon = isOpen ? <Icon type="folder-open" /> : <Icon type="folder-open" />
    return (
        {CstmIcon}
    )
}

export { FolderIcon }