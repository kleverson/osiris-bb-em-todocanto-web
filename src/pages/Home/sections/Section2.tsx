import Baterista from "../../../assets/images/mobile/baterista.png";

export function Section2() {
  return (
    <div className="flex justify-center items-center pb-96 pt-40 md:py-40 md:pb-[340px]">
      <div
        className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 z-10"
        id="como-participar"
      >
        <div className="hidden lg:block"></div>
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-5xl text-amarelo-bb font-bb-titulos font-extrabold">
            Veja como participar!
          </h2>
          <p className="text-lg lg:text-3xl text-white font-bold">
            Está na hora de transformar <br />
            cada nota em inspiração.
          </p>
          <p className="text-lg lg:text-2xl text-white font-light">
            Se a música faz parte de você, inscreva-se <br />
            solo ou com a sua banda formada só por <br />
            colegas do BB e mostre seu talento no BB <br />
            em Todo Canto.
          </p>
        </div>
      </div>
      <img
        src={Baterista}
        alt="Baterista"
        className="sm:hidden absolute -bottom-2 w-full"
      />
    </div>
  );
}
