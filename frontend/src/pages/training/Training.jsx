import React from 'react';
import { DataProvider, useData } from './DataContext';
import TrainingStructure from './TrainingStructure';

const Training = () => {
    const data = useData();

    return (
        <div>
            <TrainingStructure data={data.groundHandlingAgent} />
            <TrainingStructure data={data.AirportPMRAgent} />
            <TrainingStructure data={data.welcomeAgent} />
            <TrainingStructure data={data.rampAgent} />
            <TrainingStructure data={data.baggageAgent} />
            <TrainingStructure data={data.cleaningAgent} />
            <TrainingStructure data={data.securityAgent} />
            <TrainingStructure data={data.MealTrayPreparer} />
            <TrainingStructure data={data.ImportExportAgent} />
        </div>
    );
};

const Root = () => (
    <DataProvider>
        <Training />
    </DataProvider>
);

export default Training;
