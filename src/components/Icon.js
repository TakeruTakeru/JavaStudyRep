import React from "react";
import { Button } from "antd";

const FolderIcon = props => {
    const { isOpen, onClick } = props;
    const name = isOpen ? "folder-open": "folder-open";
    return (
        <Button icon={name} onClick={onClick}/>
    )
}

export { FolderIcon }