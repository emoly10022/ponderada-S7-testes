import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';

const cardStyle = {
  background: '#fff',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  padding: '20px',
  width: 'fit-content',
};



interface ScatterPlotChartProps {
  data: [string, number][];
}

const ScatterPlotChart: React.FC<ScatterPlotChartProps> = ({ data }) => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const formattedData = data.map(([date, stage]) => [Date.parse(date), stage]);

      Highcharts.chart(chartContainerRef.current, {
        chart: {
          type: 'scatter',
        },
        title: {
          text: 'Scatter Plot Chart',
        },
        xAxis: {
          type: 'datetime',
          title: {
            text: 'Data de Entrega',
          },
        },
        yAxis: {
          title: {
            text: 'Etapa',
          },
        },
        plotOptions: {
          scatter: {
            marker: {
              radius: 5,
              states: {
                hover: {
                  enabled: true,
                  lineColor: 'rgb(100,100,100)',
                },
              },
            },
            states: {
              hover: {
                marker: {
                  enabled: false,
                },
              },
            },
            tooltip: {
              headerFormat: '<b>{series.name}</b><br>',
              pointFormatter: function () {
                return `Data de Entrega: ${Highcharts.dateFormat('%e %b %Y', this.x)}<br>Etapa: ${this.y}`;
              },
            },
          },
        },
        series: [
          {
            name: 'Projetos',
            color: 'rgba(223, 83, 83, .5)',
            data: formattedData,
          },
        ],
      });
    }
  }, [data]);

  return <div ref={chartContainerRef} style={cardStyle} />;
};

export default ScatterPlotChart;
