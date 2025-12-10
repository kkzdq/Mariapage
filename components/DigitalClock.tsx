import React, { useState, useEffect } from 'react';

interface ClockProps {
  className?: string;
}

const DigitalClock: React.FC<ClockProps> = ({ className = "" }) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');
  const hours = formatNumber(time.getHours());
  const minutes = formatNumber(time.getMinutes());

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="text-white font-bold text-xs md:text-lg drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">TIME</div>
      <div className="text-white font-bold text-sm md:text-2xl tracking-widest drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
        {hours}<span className="animate-pulse">:</span>{minutes}
      </div>
    </div>
  );
};

export default DigitalClock;