import { useState } from "react";
import { VetorTopRoxo } from "../../../assets/Icons";
import {
  FormTalentoMusicalStep1,
  FormTalentoMusicalStep2,
  FormTalentoMusicalStep3,
  FormTalentoMusicalStep4,
  FormTalentoMusicalStep5,
} from "../../../components/FormTalentoMusical";

export function Section5Form() {
  const [step, setStep] = useState(3);

  return (
    <div className="relative bg-cinza-200 z-10">
      <div className="absolute top-0 w-full z-20">
        <VetorTopRoxo />
      </div>
      {step === 1 && <FormTalentoMusicalStep1 setStep={setStep} />}
      {step === 2 && <FormTalentoMusicalStep2 setStep={setStep} />}
      {step === 3 && <FormTalentoMusicalStep3 setStep={setStep} />}
      {step === 4 && <FormTalentoMusicalStep4 setStep={setStep} />}
      {step === 5 && <FormTalentoMusicalStep5 />}
    </div>
  );
}
