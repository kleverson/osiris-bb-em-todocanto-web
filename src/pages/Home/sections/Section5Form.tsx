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
      if (user?.already_video) {
        setUploadedData({
          formData: {
            title: user.already_video.title,
            nickname: user.already_video.nickname,
            category: user.already_video.category,
            description: user.already_video.description,
            song: user.already_video.song,
          },
          files: {},
        });
        setStep(4);
      } else {
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
