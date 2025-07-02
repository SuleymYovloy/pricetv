import { useState, useEffect } from 'react';

interface IProgramsTimeProps {
  words:
    | {
        count_product: number;
        count_saved_image: number;
        country: number;
        id: number;
        is_last: boolean;
        name: string;
        slug: string;
        time_grid: {
          count_product_per_day: number;
          create_at: string;
          end_time: string;
          id: number;
          start_time: string;
        };
      }[]
    | [];
}
const dalayENV: number = import.meta.env.REACT_APP_PROGRAMS_TIME_DALAY || 10000;

export const ProgramsTime = ({ words }: IProgramsTimeProps) => {
  const [index, setIndex] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);

  const [delay, setDalay] = useState<number>(dalayENV);

  useEffect(() => {
    if (words.length === 1) return;

    const intervalId = setInterval(() => {
      if (opacity === 0) {
        setIndex(index === words.length - 1 ? 0 : index + 1);
        setDalay(dalayENV);
        setOpacity(1);
      } else {
        setDalay(200);
        setOpacity((prev) => (Math.sign(prev) === -1 ? 0 : prev - 0.09));
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [index, opacity, words]);

  const name = words && words[index]['name'];
  const startTime = words[index]['time_grid'] && words[index]['time_grid']['start_time'].split('Z')[0];
  const end_time = words[index]['time_grid'] && words[index]['time_grid']['end_time'].split('Z')[0];

  return <span style={{ opacity, marginLeft: '10px' }}>{`Program: ${name} TIME: ${startTime} - ${end_time}`}</span>;
};
