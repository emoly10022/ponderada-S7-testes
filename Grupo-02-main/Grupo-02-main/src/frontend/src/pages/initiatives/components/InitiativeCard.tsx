import { Link } from 'react-router-dom';
import { useCardStore } from '../../../stores/CardStore';
// import approved from '../../../assets/icons/approvedIniciative.svg';
// import underAnalysis from '../../../assets/icons/analysisIniciative.svg';
// import developmentIniciative from '../../../assets/icons/developmentIniciative.svg';
// import denied from  '../../../assets/icons/denied.svg';

export default function InitiativeCard() {
  const filteredData = useCardStore((state) => state.filteredData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredData.map((initiative) => (
        <Link to={`/initiatives/${initiative.id}`} key={initiative.id} className="hover:cursor-pointer">
          <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center">
            <h3 className="text-lg mb-5">{initiative.initiativeName}</h3>
            <h3 className="text-lg mb-5">{initiative.scope}</h3>
            <h3 className="text-lg mb-5">{initiative.moduleId}</h3>
            <h3 className="text-lg mb-5">{initiative.courseId}</h3>
            {/* <div className="mt-5">
              {initiative.status === 'approved' && <img src={approved} alt="Approved" />}
              {initiative.status === 'underAnalysis' && <img src={underAnalysis} alt="Under Analysis" />}
              {initiative.status === 'denied' && <img src={denied} alt="Denied" />}
              {initiative.status === 'underDevelopment' && <img src={developmentIniciative} alt="underDevelopment" />}
            </div> */}
          </div>
        </Link>
      ))}
    </div>
  );
}



// import { Link } from 'react-router-dom';
// import { useCardStore } from '../../../stores/CardStore';
// import approved from '../../../assets/icons/approvedinitiative.svg';
// import underAnalysis from '../../../assets/icons/analysisinitiative.svg';
// import developmentinitiative from '../../../assets/icons/developmentinitiative.svg';
// import denied from  '../../../assets/icons/denied.svg';

// export default function InitiativeCard() {
//   const filteredData = useCardStore((state) => state.filteredData);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {filteredData.map((initiative) => (
//         <Link to={`/initiatives/${initiative.id}`} key={initiative.id} className="hover:cursor-pointer">
//           <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-center items-center">
//             <h3 className="text-lg mb-5">{initiative.name}</h3>
//             <div className="mt-5">
//               {initiative.status === 'approved' && <img src={approved} alt="Approved" />}
//               {initiative.status === 'underAnalysis' && <img src={underAnalysis} alt="Under Analysis" />}
//               {initiative.status === 'denied' && <img src={denied} alt="Denied" />}
//               {initiative.status === 'underDevelopment' && <img src={developmentinitiative} alt="underDevelopment" />}
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }
