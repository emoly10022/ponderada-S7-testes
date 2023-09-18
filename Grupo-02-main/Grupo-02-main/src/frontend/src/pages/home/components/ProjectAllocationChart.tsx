import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface Project {
  id: number;
  projectName: string;
  partnerName: string;
  description: string;
  allocated: boolean;
  sector: string;
}

interface ProjectAllocationChartProps {
  filteredProjects: Project[];
}

const cardStyle = {
  background: '#fff',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  padding: '20px',
  width: 'fit-content',
};

const ProjectAllocationChart: React.FC<ProjectAllocationChartProps> = ({ filteredProjects }) => {
  const generateChartData = (projects: Project[]) => {
    const sectors = ['ONG', 'Governamental', 'Privado'];

    const data = sectors.map((sector) => {
      const projectsInSector = projects.filter((project) => project.sector === sector);
      return {
        name: sector,
        y: projectsInSector.length,
      };
    });

    return data;
  };

  const chartConfig = {
    chart: {
      type: 'pie',
      height: '100%',
    },
    title: {
      text: 'Distribuição de Projetos por Setor',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Projetos',
        colorByPoint: true,
        data: generateChartData(filteredProjects),
      },
    ],
  };

  return (
    <div className="card" style={cardStyle}>
      <h2 className="card-title">Gráfico de Alocação por Setor</h2>
      <div className="card-content">
        <HighchartsReact highcharts={Highcharts} options={chartConfig} />
      </div>
    </div>
  );
};

export default ProjectAllocationChart;
