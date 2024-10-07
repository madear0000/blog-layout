import { useState, useEffect } from 'react';

const useAnimatedNumber = (targetNumber, duration = 2000) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = targetNumber / (duration / 16); 

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCurrentNumber(targetNumber);
          clearInterval(timer);
        } else {
          setCurrentNumber(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer); 
    }, [targetNumber, duration]);

    return currentNumber;
};

export default useAnimatedNumber;