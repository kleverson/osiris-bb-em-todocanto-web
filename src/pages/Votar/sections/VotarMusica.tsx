import { LogoBBEmTodoCanto } from "../../../assets/Icons";

export function VotarMusica() {
  return (
    <div className="min-h-screen flex justify-center items-center relative bg-[url('/bgVotar.png')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto w-full px-4 py-36 flex items-center justify-center ">
        <div className="absolute left-10 top-4">
          <LogoBBEmTodoCanto />
        </div>
        <div className="flex gap-10 items-center justify-center w-full">
          <div className="space-y-6 text-end max-w-xs">
            <h2 className="text-3xl lg:text-5xl font-black text-azul-bb font-bb-titulos">
              Conto com <br />o seu voto
            </h2>
            <p className="text-xl text-cinza-700">
              Minha música já tá no ar e agora falta o seu voto pra virar hit!
            </p>
          </div>
          <div className="w-full max-w-2xl flex flex-col gap-10">
            <img
              src="https://picsum.photos/200/300"
              alt=""
              className="max-h-96 w-full h-full object-cover"
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  className="rounded-full w-10 h-10 object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold">Vjadan</span>
                  <span>Sede - Banco do Brasil</span>
                </div>
              </div>
              <button className="px-10 py-2 bg-azul-bb text-white text-xl uppercase font-bold">
                votar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
