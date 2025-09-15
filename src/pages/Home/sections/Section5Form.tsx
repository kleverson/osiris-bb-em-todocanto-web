import { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import {
  FormTalentoMusicalStep1,
  FormTalentoMusicalStep2,
  FormTalentoMusicalStep3,
  FormTalentoMusicalStep4,
  // FormTalentoMusicalStep5,
} from "../../../components/FormTalentoMusical";

export function Section5Form() {
  const { isAuthenticated, user } = useAuth();
  const [step, setStep] = useState(1);
  const [uploadedData, setUploadedData] = useState<{
    formData?: {
      title: string;
      nickname: string;
      category: number;
      description: string;
      song: string;
    };
    files?: {
      file?: File;
      thumb?: File;
      picture?: File;
    };
  }>({});

  useEffect(() => {
    if (isAuthenticated) {
      // Se o usuário está autenticado e já tem um vídeo, vai direto para o step 4
      if (user?.already_video) {
        // Converte os dados do vídeo já enviado para o formato esperado pelo modal
        setUploadedData({
          formData: {
            title: user.already_video.title,
            nickname: user.already_video.nickname,
            category: user.already_video.category,
            description: user.already_video.description,
            song: user.already_video.song,
          },
          // Para vídeos já enviados, usamos as URLs em vez de Files
          files: {}, // Será tratado no modal como vídeo existente
        });
        setStep(4);
      } else {
        // Se autenticado mas sem vídeo, vai para o step 2
        setStep(2);
      }
    } else {
      setStep(1);
    }
  }, [isAuthenticated, user]);

  return (
    <div id="inscreva-se" className="relative bg-cinza-200 z-10">
      {step === 1 && <FormTalentoMusicalStep1 setStep={setStep} />}
      {step === 2 && <FormTalentoMusicalStep2 setStep={setStep} />}
      {step === 3 && (
        <FormTalentoMusicalStep3
          setStep={setStep}
          setUploadedData={setUploadedData}
        />
      )}
      {step === 4 && <FormTalentoMusicalStep4 uploadedData={uploadedData} />}
      {/* {step === 5 && <FormTalentoMusicalStep5 uploadedData={uploadedData} />} */}
    </div>
  );
}
