import React, { useState } from 'react';
import ProjectAllocationChart from './ProjectAllocationChart';
import ScatterPlotChart from './ScatterPlotChart';
import { useSpring, animated, SpringValue } from 'react-spring';

interface Project {
  id: number;
  projectName: string;
  partnerName: string;
  description: string;
  allocated: boolean;
  sector: string;
  stage: number;
  submitDate: string;
}

interface DashboardProps {
  projects: Project[];
}

const Dashboard: React.FC<DashboardProps> = ({ projects }) => {
  const [chartVersion, setChartVersion] = useState<'allocated' | 'unallocated'>('allocated');
  const [showAll, setShowAll] = useState(false);
  
  const handleChartVersionChange = (version: 'allocated' | 'unallocated') => {
    setChartVersion(version);
  };

  const filteredProjects = chartVersion === 'allocated'
  ? projects.filter((project) => project.allocated)
  : projects.filter((project) => !project.allocated);

  const scatterDataAlocados = filteredProjects.map((project) => [String(project.submitDate), project.stage]);
  const scatterDataNaoAlocados = projects
    .filter((project) => !project.allocated)
    .map((project) => [String(project.submitDate), project.stage]);

  
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  
  // Configurações da animação do botão "Ver Mais"
  const buttonAnimation: { transform: SpringValue<string> } = useSpring({
    transform: `scale(${showAll ? 1 : 0.95})`, // Reduzir a escala quando "Ver Mais" estiver visível
    config: { tension: 300, friction: 20 }, // Ajuste a configuração de animação conforme necessário
  });

  const toggleShowAllAndScroll = () => {
    setShowAll(!showAll);
    const projectListAnchor = document.getElementById('project-list-anchor');

    if (projectListAnchor) {
      projectListAnchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderProject = (project: Project) => (
    <div key={project.id} className="w-2/4 mb-4 border p-4 bg-white inner-shadow-[0_4px_4px_rgba(0,0,0,10%)] rounded-lg">
      {project.projectName} - {project.sector}
      <p className='text-gray-500'>{project.description}</p>
    </div>
  );

  return (
    <div className="flex flex-col space-y-8">
      <div className="flex space-x-4 items-center justify-center">
        <button
          className={`group flex items-center p-2 rounded-md bg-gray-200 hover:bg-green-500 hover:text-white transition-all transform ${
            chartVersion === 'allocated' ? 'bg-green-500 text-white scale-105' : ''
          }`}
          onClick={() => handleChartVersionChange('allocated')}
        >
          <span className="mr-2">Alocados</span>
          {chartVersion === 'allocated' && (
            <span className="bg-green-600 text-white rounded-full px-2 py-1 text-sm">Atual</span>
          )}
        </button>
        <button
          className={`group flex items-center p-2 rounded-md bg-gray-200 hover:bg-red-500 hover:text-white transition-all transform ${
            chartVersion === 'unallocated' ? 'bg-red-500 text-white scale-105' : ''
          }`}
          onClick={() => handleChartVersionChange('unallocated')}
        >
          <span className="mr-2">Não Alocados</span>
          {chartVersion === 'unallocated' && (
            <span className="bg-red-600 text-white rounded-full px-2 py-1 text-sm">Atual</span>
          )}
        </button>
      </div>
      <div className='flex gap-10'>
      <ProjectAllocationChart filteredProjects={filteredProjects} />
      <ScatterPlotChart data={chartVersion === 'allocated' ? scatterDataAlocados : scatterDataNaoAlocados} />
      </div>
      <h2 className="text-xl font-semibold my-4">
        {showAll ? 'Todos os Projetos:' : 'Últimos Projetos:'}
      </h2>
      <animated.ul className="list-disc list-inside" style={{ transform: buttonAnimation.transform }}>
        {showAll ? filteredProjects.map(renderProject) : visibleProjects.map(renderProject)}
      </animated.ul>

      {/* Botão "Ver Mais" */}
      <button
        className="bg-blue-500 mt-5 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition-colors duration-300 ease-in-out"
        onClick={toggleShowAllAndScroll}
        style={{ transform: buttonAnimation.transform }} // Aplicar a animação ao estilo do botão
      >
        {showAll ? 'Ver Menos' : 'Ver Mais'}
      </button>
    </div>
  );
};

export default Dashboard;
