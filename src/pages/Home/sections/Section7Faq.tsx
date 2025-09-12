import { useState } from "react";
import Piano from "../../../assets/images/piano.png";
import { PerguntasFrequentes } from "../../../mock/PerguntasFrequentes";

export function Section7Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-amarelo-bb">
      <div className="relative max-w-6xl mx-auto w-full px-4 py-16 z-30 grid md:grid-cols-2 gap-10">
        <div className="text-azul-bb">
          <h2 className="text-6xl text-azul-bb font-extrabold border-b-2 border-rosa-600 pb-10 font-bb-titulos">
            Perguntas? Temos a resposta.
          </h2>
          <p className="py-10 font-light text-lg">
            Confira as dúvidas mais frequentes.
          </p>
          <div className="space-y-1">
            {PerguntasFrequentes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div
                  className="flex justify-between items-center p-6 text-lg font-medium cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <p>{item.question}</p>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-transform duration-300 ease-in-out ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <rect
                      x="-0.625"
                      y="-0.625"
                      width="38.75"
                      height="38.75"
                      rx="19.375"
                      transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 38.75 38.75)"
                      stroke="#465EFF"
                      strokeWidth="1.25"
                    />
                    <path
                      d="M15.1625 18L19.7688 22.6062L24.375 18"
                      stroke="#465EFF"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  className={`overflow-hidden bg-azul-bb transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 text-white">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-[10vw] w-[45%]">
        <img src={Piano} alt="pessoa tocando piano" />
      </div>
    </div>
  );
}
