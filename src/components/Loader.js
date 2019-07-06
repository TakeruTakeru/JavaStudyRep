import React from 'react';
import { Spin } from 'antd';

const PageLoader = props => {
    const { spinning } = props;
    return (
        <div className="loader">
            <Spin spinning={spinning} />
        </div>
    )
}

export {PageLoader};