import React from 'react';
import { PageLoader } from 'components/Loader';
import { Search } from 'components/DataEntry';
import { WFAdapter } from 'api/client';

const cityMapper = {
    tokyo: '130010',
    yokohama: '140010'
};

const getTodaysForecast = cityId => {
    WFAdapter.get(`users/TakeruTakeru`).then(res => {
        console.log(res);
    })
}

export const Home = props => {
    const onSearch = e => {
        getTodaysForecast(cityMapper.tokyo);
    }
    return (
        <div>
            New Panels.
            <PageLoader sppining={true} />
            <Search onSearch={onSearch} width={200} />
        </div>
    )
}