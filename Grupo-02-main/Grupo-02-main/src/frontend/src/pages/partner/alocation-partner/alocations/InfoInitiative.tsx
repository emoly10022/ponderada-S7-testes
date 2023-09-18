// App.tsx
import React from 'react';
import InfoCard from './InfoCard';
import ButtonGroup from './ButtonGroup';
import FullHeightCard from './FullHeightCard';
// import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'

import initiativesMockData from './initiativesMockData';

const InfoInitiative: React.FC = () => {
  // Use o primeiro item do array de mock data
  const firstInitiative = initiativesMockData[0];

  return (
    <div className="overflow-auto relative z-[-1] grid flex-col rounded-xl justify-center items-center h-max bg-gray-100 shadow-xl p-8">
      {/* <Timeline minEvents={5} placeholder>
        {initiativesMockData.map((initiative, index) => (
          <TimelineEvent
            key={index}
            icon={FaRegFileAlt}
            title={initiative.initiativeName}
            subtitle={initiative.createdAt.toLocaleDateString()} // Certifique-se de que createdAt seja uma data válida
          />
        ))}
      </Timeline> */}

      <hr className="w-[90%] border-t border-gray-300 my-4" />
      <div className="flex flex-grid justify-center items-center gap-5 w-full p-4">
        <InfoCard
          startDate={firstInitiative.startDate}
          endDate={firstInitiative.endDate}
          responsible={firstInitiative.responsible}
          phone={firstInitiative.phone}
          email={firstInitiative.email}
        />
      </div>

      <hr className="w-[90%] border-t border-gray-300 my-4" />
      <div className="flex justify-center w-full p-4">
        <ButtonGroup />
      </div>

      <hr className="w-[90%] border-t border-gray-300 my-4" />
      <div className="w-full p-4">
        <FullHeightCard />
      </div>
    </div>
  );
};

export default InfoInitiative;