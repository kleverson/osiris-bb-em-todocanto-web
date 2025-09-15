import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { Contator, LogoBBEmTodoCanto } from "../../../assets/Icons";
import Banda from "../../../assets/images/mobile/banda.png";

export function Section1() {
  const [alertVisible, setAlertVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const navigate = useNavigate();

  // Data do evento: 26/09/2025
  const eventDate = new Date("2025-09-26T23:59:59");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0 });
    }
  };

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -56,
        });
      }, 100);
    } else {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -56,
      });
    }
  };

  return (
    <div
      id="o-concurso"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center py-12 pb-56 gap-8 relative">
        <div className="flex flex-col justify-center">
          <div className="z-10">
            <div className="w-1/2 lg:w-[296px]">
              <LogoBBEmTodoCanto />
            </div>
            <div className="space-y-3 sm:space-y-6 mt-8 lg:ml-20 max-w-md">
              <h2 className="text-3xl lg:text-5xl font-black text-azul-bb font-bb-titulos">
                Brilhe. Encante. <br />
                Faça parte
              </h2>
              <p className="text-lg lg:text-2xl text-azul-bb font-light">
                O palco é seu! Participe do concurso musical exclusivo para
                funcionários do BB e concorra a até 50 mil pontos Livelo.
              </p>
              <button
                type="button"
                onClick={() => scrollToSection("inscreva-se")}
                className="px-7 py-3 text-lg rounded-sm font-bold bg-rosa-600 hover:scale-105 duration-300 text-white uppercase cursor-pointer"
              >
                Inscreva-se
              </button>
            </div>
          </div>
          <img
            src={Banda}
            alt="Banda"
            className="sm:hidden absolute bottom-0 right-0"
          />
          <p className="text-sm lg:text-base text-azul-600 mt-20 font-light hidden sm:block">
            *Confira o regulamento da campanha.
          </p>
        </div>
        {alertVisible && (
          <div
            onClick={() => setAlertVisible(false)}
            className="w-full lg:w-[568px] lg:h-[568px] cursor-pointer z-10 absolute top-1/2 -translate-y-1/2"
          >
            <Contator />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
              <h3 className="text-2xl lg:text-3xl font-black text-amarelo-bb">
                Faltam apenas
              </h3>
              <div className="flex gap-2">
                <div className="w-[60px] h-[60px] lg:w-[88px] lg:h-[88px] rounded-full bg-amarelo-bb text-azul-bb flex flex-col justify-center items-center">
                  <span className="text-2xl lg:text-4xl font-bold">
                    {timeLeft.days}
                  </span>
                  <span className="text-xs lg:text-sm">dias</span>
                </div>
                <div className="w-[60px] h-[60px] lg:w-[88px] lg:h-[88px] rounded-full bg-amarelo-bb text-azul-bb flex flex-col justify-center items-center">
                  <span className="text-2xl lg:text-4xl font-bold">
                    {timeLeft.hours}
                  </span>
                  <span className="text-xs lg:text-sm">horas</span>
                </div>
                <div className="w-[60px] h-[60px] lg:w-[88px] lg:h-[88px] rounded-full bg-amarelo-bb text-azul-bb flex flex-col justify-center items-center">
                  <span className="text-2xl lg:text-4xl font-bold">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-xs lg:text-sm">minutos</span>
                </div>
              </div>
              <p className="text-lg lg:text-3xl text-white">
                para as inscrições serem encerradas
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
