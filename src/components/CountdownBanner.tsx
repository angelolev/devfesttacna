import { useState, useEffect } from "react";

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-30T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const isExpired =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isExpired) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-google-blue to-purple-600 text-white py-4 px-4 text-center relative overflow-hidden sticky top-[85px] z-40 shadow-lg">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <h3 className="text-lg md:text-xl font-bold">
              Descuento por Early Bird hasta el 30 de septiembre
            </h3>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2 text-center min-w-[60px]">
              <div className="text-xl md:text-2xl font-bold">
                {timeLeft.days}
              </div>
              <div className="text-xs uppercase tracking-wide">Días</div>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2 text-center min-w-[60px]">
              <div className="text-xl md:text-2xl font-bold">
                {timeLeft.hours}
              </div>
              <div className="text-xs uppercase tracking-wide">Horas</div>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2 text-center min-w-[60px]">
              <div className="text-xl md:text-2xl font-bold">
                {timeLeft.minutes}
              </div>
              <div className="text-xs uppercase tracking-wide">Min</div>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2 text-center min-w-[60px]">
              <div className="text-xl md:text-2xl font-bold">
                {timeLeft.seconds}
              </div>
              <div className="text-xs uppercase tracking-wide">Seg</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;
