import { CompartilharIcon, FacebookIcon, WhatsAppIcon } from "../assets/Icons";

export function FormTalentoMusicalStep1({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  return (
    <div className="relative max-w-5xl mx-auto w-full px-4 py-24 z-30 grid grid-cols-2 gap-10">
      <div className="space-y-10">
        <h2 className="text-3xl lg:text-5xl text-azul-bb font-bold font-bb-titulos">
          Transforme <br />
          sua música <br />
          em conquista.
        </h2>
        <p className="text-xl text-cinza-600 font-light">
          Envie seu vídeo de apresentação e concorra a até 50 mil pontos Livelo.
        </p>
      </div>
      <form className="border-l-2 pl-10 border-azul-bb/50 flex gap-5 flex-col">
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">Matrícula</span>
          <input
            type="text"
            placeholder="Digite a sua matrícula"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
          />
          <span className="text-sm text-azul-bb font-light">
            Exemplo: F000000
          </span>
        </label>
        <label className="flex flex-col gap-2 mt-6">
          <span className="text-cinza-600 font-medium">Senha</span>
          <input
            type="password"
            placeholder="********"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
          />
          <span className="text-sm text-azul-bb font-light">
            Utilize a senha dos portais externos.
          </span>
        </label>
        <button
          type="button"
          className="px-7 py-3 font-bold bg-azul-bb text-white uppercase mt-10 rounded-sm cursor-pointer hover:brightness-90 transition"
          onClick={() => setStep(2)}
        >
          continuar
        </button>
      </form>
    </div>
  );
}
export function FormTalentoMusicalStep2({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  return (
    <div className="relative max-w-5xl mx-auto w-full px-4 py-24 z-30 grid grid-cols-2 gap-10">
      <div className="space-y-5">
        <div className="flex gap-3 items-center mb-16">
          <span className="w-7 h-7 rounded-full bg-azul-bb flex items-center justify-center text-xs font-bold text-white">
            01
          </span>
          <span className="text-azul-bb">Seus dados</span>
          <span className="w-7 h-7 rounded-full border-2 border-azul-bb flex items-center justify-center text-xs font-bold text-azul-bb">
            02
          </span>
          <span className="w-7 h-7 rounded-full border-2 border-azul-bb flex items-center justify-center text-xs font-bold text-azul-bb">
            03
          </span>
        </div>
        <h2 className="text-3xl lg:text-5xl text-azul-bb font-bold font-bb-titulos">
          Dados pessoais
        </h2>
        <p className="text-xl text-cinza-600">
          Preencha os seus dados para dar início à inscrição.
        </p>
      </div>
      <form className="border-l-2 pl-10 border-azul-bb/50 flex gap-5 flex-col">
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">Nome completo</span>
          <input
            type="text"
            placeholder="Digite o seu nome completo"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">
            Dependência em que trabalha
          </span>
          <input
            type="text"
            placeholder="Digite o número da sua agência"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
          />
          <span>Exemplo: 4267</span>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">Qual sua região?</span>
          <input
            type="text"
            placeholder="Selecione o local em que está lotado atualmente"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
          />
        </label>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <button className="w-full py-2 font-bold border-2 border-azul-bb text-azul-bb uppercase rounded-sm cursor-pointer hover:brightness-90 transition">
            VOLTAR
          </button>
          <button
            type="button"
            className="w-full py-2 font-bold bg-azul-bb text-white uppercase rounded-sm cursor-pointer hover:brightness-90 transition"
            onClick={() => setStep(3)}
          >
            continuar
          </button>
        </div>
      </form>
    </div>
  );
}

export function FormTalentoMusicalStep3({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  return (
    <div className="relative max-w-5xl mx-auto w-full px-4 py-24 z-30 grid grid-cols-2 gap-10">
      <div className="space-y-5">
        <div className="flex gap-3 items-center mb-16">
          <span className="w-7 h-7 rounded-full bg-verde-500 flex items-center justify-center text-xs font-bold text-azul-bb">
            01
          </span>
          <span className="w-7 h-7 rounded-full bg-azul-bb flex items-center justify-center text-xs font-bold text-white">
            02
          </span>
          <span className="text-azul-bb">Sua música</span>
          <span className="w-7 h-7 rounded-full border-2 border-azul-bb flex items-center justify-center text-xs font-bold text-azul-bb">
            03
          </span>
        </div>
        <h2 className="text-3xl lg:text-5xl text-azul-bb font-bold font-bb-titulos">
          Hora da sua apresentação
        </h2>
        <p className="text-xl text-cinza-600">
          Grave a sua apresentação ou da sua banda e envie o vídeo pra gente
        </p>
      </div>
      <form className="border-l-2 px-10 border-cinza-400 flex gap-5 flex-col max-h-96 overflow-y-auto">
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">
            Escolha a categoria
          </span>
          <input
            type="text"
            placeholder="Selecione"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">
            Como gostaria de ser chamado(a)
          </span>
          <input
            type="text"
            placeholder="Fale pra gente"
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">
            Fale um pouco sobre você
          </span>
          <textarea
            placeholder="Conte sobre o que te inspira nessa jornada"
            maxLength={400}
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition resize-none h-32"
          />
          <span className="text-sm text-azul-bb">
            Máximo de 400 caracteres.
          </span>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-cinza-600 font-medium">
            Qual é o nome da música
          </span>
          <textarea
            placeholder="Digite o título da música que será apresentada"
            maxLength={400}
            className="bg-white p-3 text-azul-bb border-b-2 border-azul-bb outline-none focus:border-roxo-600 transition resize-none h-32"
          />
        </label>
        <div className="space-y-4">
          <h3 className="text-cinza-600 text-xl font-extrabold">
            Faça upload do seu vídeo de apresentação
          </h3>
          <p className="text-cinza-600 font-light">
            Capriche no vídeo. Escolha o melhor ângulo para registrar o melhor
            da sua música. Um vídeo bem gravado com som bem captado valoriza
            ainda mais o seu talento.
          </p>
          <label className="bg-white p-8 flex flex-col items-center justify-center gap-4 text-center text-azul-bb">
            <span>
              Arraste e solte o arquivo do seu vídeo para fazer o envio
            </span>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.865967"
                width="40"
                height="40"
                rx="20"
                fill="#465EFF"
              />
              <path
                d="M15.2618 17.7819C15.4401 17.7819 15.6077 17.7125 15.734 17.5863L19.289 14.0313V21.9434C19.289 22.3115 19.5884 22.6109 19.9565 22.6109C20.3246 22.6109 20.624 22.3115 20.624 21.9434V14.0313L24.179 17.5863C24.3051 17.7123 24.4727 17.7819 24.651 17.7819C24.9261 17.7819 25.1624 17.624 25.2676 17.3698C25.3728 17.1157 25.3176 16.8369 25.1229 16.6424L20.64 12.1595C20.2629 11.7824 19.6492 11.7824 19.2721 12.1595L14.7892 16.6424C14.5948 16.8369 14.5393 17.1157 14.6445 17.3698C14.7497 17.624 14.986 17.7819 15.2611 17.7819H15.2618Z"
                fill="white"
              />
              <path
                d="M27.6778 21.6907C27.4993 21.6865 27.3305 21.7549 27.2015 21.8814C27.0718 22.0088 26.9973 22.1855 26.9973 22.3665V26.5807C26.9973 26.6302 26.9571 26.6704 26.9076 26.6704H13.0927C13.0433 26.6704 13.003 26.6302 13.003 26.5807V22.358C13.003 21.9899 12.7036 21.6904 12.3355 21.6904C11.9674 21.6904 11.668 21.9899 11.668 22.358V27.0376C11.668 27.5715 12.1022 28.0057 12.6361 28.0057H27.3645C27.8984 28.0057 28.3326 27.5715 28.3326 27.0376V22.358C28.3326 21.9968 28.039 21.6974 27.6781 21.6904L27.6778 21.6907Z"
                fill="white"
              />
            </svg>

            <button className="px-5 py-2 font-bold border-2 border-azul-bb text-azul-bb uppercase rounded-sm cursor-pointer hover:brightness-90 transition">
              selecionar arquivo
            </button>
          </label>
        </div>
        <div className="space-y-4">
          <h3 className="text-cinza-600 text-xl font-extrabold">
            Faça upload da sua melhor foto
          </h3>
          <p className="text-cinza-600 font-light">
            Hora de impressionar o público! Escolha o melhor angulo e envie a
            sua foto que será usada como destaque no seu vídeo
          </p>
          <label className="bg-white p-8 flex flex-col items-center justify-center gap-4 text-center text-azul-bb">
            <span>
              Arraste e solte o arquivo da sua foto para fazer o envio
            </span>
            <svg
              width="40"
              height="41"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="0.865967"
                width="40"
                height="40"
                rx="20"
                fill="#465EFF"
              />
              <path
                d="M15.2618 17.7819C15.4401 17.7819 15.6077 17.7125 15.734 17.5863L19.289 14.0313V21.9434C19.289 22.3115 19.5884 22.6109 19.9565 22.6109C20.3246 22.6109 20.624 22.3115 20.624 21.9434V14.0313L24.179 17.5863C24.3051 17.7123 24.4727 17.7819 24.651 17.7819C24.9261 17.7819 25.1624 17.624 25.2676 17.3698C25.3728 17.1157 25.3176 16.8369 25.1229 16.6424L20.64 12.1595C20.2629 11.7824 19.6492 11.7824 19.2721 12.1595L14.7892 16.6424C14.5948 16.8369 14.5393 17.1157 14.6445 17.3698C14.7497 17.624 14.986 17.7819 15.2611 17.7819H15.2618Z"
                fill="white"
              />
              <path
                d="M27.6778 21.6907C27.4993 21.6865 27.3305 21.7549 27.2015 21.8814C27.0718 22.0088 26.9973 22.1855 26.9973 22.3665V26.5807C26.9973 26.6302 26.9571 26.6704 26.9076 26.6704H13.0927C13.0433 26.6704 13.003 26.6302 13.003 26.5807V22.358C13.003 21.9899 12.7036 21.6904 12.3355 21.6904C11.9674 21.6904 11.668 21.9899 11.668 22.358V27.0376C11.668 27.5715 12.1022 28.0057 12.6361 28.0057H27.3645C27.8984 28.0057 28.3326 27.5715 28.3326 27.0376V22.358C28.3326 21.9968 28.039 21.6974 27.6781 21.6904L27.6778 21.6907Z"
                fill="white"
              />
            </svg>

            <button className="px-5 py-2 font-bold border-2 border-azul-bb text-azul-bb uppercase rounded-sm cursor-pointer hover:brightness-90 transition">
              selecionar arquivo
            </button>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <button className="w-full py-2 font-bold border-2 border-azul-bb text-azul-bb uppercase rounded-sm cursor-pointer hover:brightness-90 transition">
            VOLTAR
          </button>
          <button
            type="button"
            className="w-full py-2 font-bold bg-azul-bb text-white uppercase rounded-sm cursor-pointer hover:brightness-90 transition"
            onClick={() => setStep(4)}
          >
            continuar
          </button>
        </div>
      </form>
    </div>
  );
}

export function FormTalentoMusicalStep4({
  setStep,
}: {
  setStep: (step: number) => void;
}) {
  return (
    <div className="relative max-w-5xl mx-auto w-full px-4 py-24 z-30 grid grid-cols-2 gap-10">
      <div className="space-y-5">
        <div className="flex gap-3 items-center mb-16">
          <span className="w-7 h-7 rounded-full bg-verde-500 flex items-center justify-center text-xs font-bold text-azul-bb">
            01
          </span>
          <span className="w-7 h-7 rounded-full bg-verde-500 flex items-center justify-center text-xs font-bold text-azul-bb">
            02
          </span>
          <span className="w-7 h-7 rounded-full bg-azul-bb flex items-center justify-center text-xs font-bold text-white">
            03
          </span>
          <span className="text-azul-bb">Finalize o cadastro</span>
        </div>
        <h2 className="text-3xl lg:text-5xl text-azul-bb font-bold font-bb-titulos">
          Ative sua torcida
        </h2>
        <p className="text-xl text-cinza-600">
          Baixe sua imagem personalizada e compartilhe-a com os seus colegas do
          BB. Cada voto deixa você mais perto da vitória.
        </p>
      </div>
      <form className="border-l-2 pl-10 border-azul-bb/50 flex gap-5 flex-col">
        <div className="grid grid-cols-2 items-center gap-5 bg-white p-10">
          <img
            src="https://picsum.photos/200/300"
            className="object-cover"
            alt=""
          />
          <div>
            <p className="text-cinza-600 font-light">
              Agora é com você: faça o download da imagem e compartilhe-a com os
              seus colegas para conseguir mais votos!
            </p>
            <button className="flex items-center gap-2 text-azul-bb font-bold uppercase mt-5">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.59363 5.76451C3.7719 5.76451 3.93953 5.83388 4.06578 5.96012L7.62077 9.51512V1.60303C7.62077 1.23493 7.9202 0.935498 8.2883 0.935498C8.6564 0.935498 8.95583 1.23493 8.95583 1.60303V9.51512L12.5108 5.96012C12.6368 5.83411 12.8045 5.76451 12.9827 5.76451C13.2579 5.76451 13.4942 5.92243 13.5994 6.17654C13.7046 6.43065 13.6494 6.70951 13.4547 6.90396L8.97179 11.3868C8.59467 11.764 7.98101 11.764 7.6039 11.3868L3.12102 6.90396C2.92656 6.70951 2.87107 6.43065 2.97627 6.17654C3.08148 5.92243 3.31779 5.76451 3.59294 5.76451H3.59363Z"
                  fill="#465EFF"
                />
                <path
                  d="M16.0099 10.7495C15.8314 10.7453 15.6626 10.8138 15.5335 10.9403C15.4038 11.0677 15.3294 11.2443 15.3294 11.4254V15.6396C15.3294 15.689 15.2891 15.7293 15.2397 15.7293H1.42477C1.37529 15.7293 1.33506 15.689 1.33506 15.6396V11.4168C1.33506 11.0487 1.03563 10.7493 0.66753 10.7493C0.299429 10.7493 0 11.0487 0 11.4168V16.0964C0 16.6303 0.43423 17.0646 0.968115 17.0646H15.6965C16.2304 17.0646 16.6647 16.6303 16.6647 16.0964V11.4168C16.6647 11.0556 16.371 10.7562 16.0101 10.7493L16.0099 10.7495Z"
                  fill="#465EFF"
                />
              </svg>
              baixar
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <button className="w-full py-2 font-bold border-2 border-azul-bb text-azul-bb uppercase rounded-sm cursor-pointer hover:brightness-90 transition">
            VOLTAR
          </button>
          <button
            type="button"
            className="w-full py-2 font-bold bg-azul-bb text-white uppercase rounded-sm cursor-pointer hover:brightness-90 transition"
            onClick={() => setStep(5)}
          >
            finalizar
          </button>
        </div>
      </form>
    </div>
  );
}

export function FormTalentoMusicalStep5() {
  return (
    <div className="relative max-w-5xl mx-auto w-full px-4 py-24 z-30 grid grid-cols-2 gap-10">
      <div className="space-y-5">
        <h2 className="text-3xl lg:text-5xl text-azul-bb font-bold font-bb-titulos">
          Inscrição concluída com sucesso
        </h2>
        <p className="text-xl text-cinza-600">
          Pronto! A sua parte está feita. Agora é{" "}
          <strong>hora de divulgar a sua música</strong>, engajar a sua torcida
          e torcer pela vaga na grande final do{" "}
          <strong>BB em todo canto.</strong>
        </p>
        <p className="text-cinza-600">
          <strong>Boa sorte!</strong>
        </p>
      </div>
      <form className="border-l-2 pl-10 border-azul-bb/50 flex gap-5 flex-col">
        <div className="grid grid-cols-2 items-center gap-5 bg-white p-10">
          <img
            src="https://picsum.photos/200/300"
            className="object-cover"
            alt=""
          />
          <div>
            <p className="text-cinza-600 font-light">
              Divulgue o seu vídeo nas redes e chame a galera pra votar!
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="#" target="_blank">
                <FacebookIcon />
              </a>
              <a href="#" target="_blank">
                <WhatsAppIcon />
              </a>
              <a href="#" target="_blank">
                <CompartilharIcon />
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
