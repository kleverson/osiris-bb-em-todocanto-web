import { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import {
  FormTalentoMusicalStep1,
  FormTalentoMusicalStep2,
  FormTalentoMusicalStep3,
  FormTalentoMusicalStep4,
  FormTalentoMusicalStep5,
  FormTalentoMusicalStep6,
} from "../../../components/FormTalentoMusical";

export function Section5Form() {
  const { isAuthenticated, user } = useAuth();
  const [step, setStep] = useState(1);

  // Estados para os dados do formulário separados por step
  const [formData, setFormData] = useState({
    nickname: "",
    category: 0,
    description: "",
    registrations_participants: "",
  });

  const [musicData, setMusicData] = useState({
    title: "",
    song: "",
  });

  const [uploadedData, setUploadedData] = useState<{
    formData?: {
      title: string;
      nickname: string;
      category: number;
      description: string;
      song: string;
      registrations_participants?: string;
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
        // Se usuário já tem vídeo, preenche os dados e vai para step final
        setFormData({
          nickname: user.already_video.nickname,
          category: user.already_video.category,
          description: user.already_video.description,
          registrations_participants:
            user.already_video.registrations_participants || "",
        });
        setMusicData({
          title: user.already_video.title,
          song: user.already_video.song,
        });
        setUploadedData({
          formData: {
            title: user.already_video.title,
            nickname: user.already_video.nickname,
            category: user.already_video.category,
            description: user.already_video.description,
            song: user.already_video.song,
            registrations_participants:
              user.already_video.registrations_participants,
          },
          files: {},
        });
        setStep(6);
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
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === 4 && (
        <FormTalentoMusicalStep4
          setStep={setStep}
          musicData={musicData}
          setMusicData={setMusicData}
        />
      )}
      {step === 5 && (
        <FormTalentoMusicalStep5
          setStep={setStep}
          formData={formData}
          musicData={musicData}
          setUploadedData={setUploadedData}
        />
      )}
      {step === 6 && <FormTalentoMusicalStep6 uploadedData={uploadedData} />}
    </div>
  );
}
