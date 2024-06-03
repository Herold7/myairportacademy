import React from 'react';
import { DataProvider, useData } from './DataContext';
import ReusableComponent from './ReusableComponent';

const Training = () => {
    const data = useData();

    return (
        <div>
            <ReusableComponent data={data.baggageAgent} />
            <ReusableComponent data={data.cleaningAgent} />
        </div>
    );
};

const Root = () => (
    <DataProvider>
        <Training />
    </DataProvider>
);

export default Training;
