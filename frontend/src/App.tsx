import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Widget from './components/widget';
import socket from './utilities/socketConnection';

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
  const [perfMachineData, setPerfMachineData] = useState<{
    [key: string]: PerformanceData;
  }>({});

  useEffect(() => {
    socket.on('perfData', (data) => {
      setPerfMachineData((prev) => ({
        ...prev,
        [data.macA]: data,
      }));
    });
  }, []); //run this once the component has rendered

  return (
    <div className='container'>
      {Object.keys(perfMachineData).map((key) => (
        <Widget key={key} data={perfMachineData[key]} />
      ))}
    </div>
  );
}

export default App;
