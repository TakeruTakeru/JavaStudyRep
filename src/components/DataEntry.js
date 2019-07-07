import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBase = props => {
    const { placeholder, onSearch, width } = props;
    console.log(onSearch)
    return (
        <Search
        placeholder={placeholder}
        onSearch={onSearch}
        onPressEnter={e => onSearch(e.target.value)}
        style={{ "width": `${width}px` }}
      />
    )
};

export { SearchBase as Search };
