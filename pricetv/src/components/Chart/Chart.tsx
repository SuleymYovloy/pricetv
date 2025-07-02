import { Area } from '@ant-design/plots';
import { FormatterNumber } from '../../utils/fomatterNumber';

export const Chart = (productInfo: any) => {
  const data = productInfo?.productInfo;

  const config = {
    data,
    xField: 'date',
    yField: 'price',
    stepType: 'vh',
    xAxis: {
      range: [0, 1]
    },
    yAxis: {
      label: {
        formatter: (num: string) => FormatterNumber(Number(num), 0)
      }
    },
    interactions: [
      {
        type: 'element-active'
      }
    ],
    animation: {
      appear: {
        easing: 'easeLinear',
        duration: 1500
      }
    }
  };

  return <Area {...config} style={{ height: '90%', width: '100%', marginTop: '3%' }} />;
};
