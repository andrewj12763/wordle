import React, { useEffect, useState } from 'react';

const Timer = () =>  {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  setInterval(
    () => {
        if(seconds === 60) {
            setSeconds(0)
            setMinutes(minutes + 1)
        } else if(minutes === 60) {
            setSeconds(0)
            setMinutes(0)
            setHours(hours + 1)
        } else if(hours === 24) {
            setSeconds(0)
            setMinutes(0)
            setHours(0)
            setDays(days + 1)
        } else {
            setSeconds(seconds + 1)
        }
    },
    1000
  );
  useEffect(() => {
    if(seconds === 60) {
        setSeconds(0)
        setMinutes(minutes + 1)
    }
  }, [seconds])

  return (
    <div>
      <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
}

export default Timer;