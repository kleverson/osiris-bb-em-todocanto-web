export function VoteNasMelhores() {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center py-5 gap-8">
        <div className="hidden lg:block"></div>
        <div className="space-y-6 lg:pt-28">
          <h2 className="text-3xl lg:text-5xl text-amarelo-bb font-bb-titulos">
            <strong>O palco é seu,</strong>
            <br />
            veja como concorrer
          </h2>
          <p className="text-lg lg:text-2xl text-white">
            É hora de transformar cada nota musical em inspiração.
          </p>
          <p className="text-lg lg:text-2xl text-white">
            Se você tem paixão pela música e quer compartilhar seu talento por
            todo canto, garanta a sua inscrição ou da sua banda no BB em Todo
            Canto e mostre seu som para todo mundo.
          </p>
          <button className="px-7 py-3 font-bold bg-amarelo-bb text-azul-bb uppercase mt-10 mx-auto rounded-sm cursor-pointer hover:brightness-90 transition">
            confira o regulamento
          </button>
        </div>
      </div>
    </div>
  );
}
