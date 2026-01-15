import { useEffect, useMemo, useState } from 'react';
import './App.css';
import socket from './utilities/socketConnection';
import Widget from './components/widget';

type PerformanceData = {
  cpuLoad: number;
  cpuSpeed: number;
  cpuType: string;
  freeMem: number;
  macA: string;
  memUsage: number;
  numCores: number;
  osType: string;
  totalMem: number;
  upTime: number;
  usedMem: number;
};

function App() {
  const [performanceData, setPerformanceData] = useState({});

  const perfMachineData: { [key: string]: PerformanceData } = {};

  useEffect(() => {
    socket.on('perfData', (data) => {});
  }, []); //run this once the component has rendered

  useEffect(() => {
    const perfDataInterval = setInterval(() => {
      setPerformanceData(perfMachineData);
    }, 1000);

    return () => clearInterval(perfDataInterval);
  }, []);

  const widgets = Object.values(performanceData).map((d: any) => (
    <Widget data={d} key={d.macA} />
  ));

  return <div className='container'>{widgets}</div>;
}

export default App;
