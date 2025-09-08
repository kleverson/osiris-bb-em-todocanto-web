export function Footer() {
  return (
    <div>
      <div className="bg-rosa-600">
        <div className="max-w-7xl mx-auto py-5 px-4 flex flex-wrap justify-between items-center">
          <h2 className="text-3xl text-white text-center font-extrabold w-fit">
            Faça a sua inscrição e participe
          </h2>
          <button className="px-7 py-3 font-bold bg-amarelo-bb text-azul-bb uppercase rounded-sm cursor-pointer hover:brightness-90 transition">
            Quero participar!
          </button>
        </div>
      </div>
      <div className="bg-azul-bb">
        <div className="flex flex-wrap justify-center gap-10 text-sm items-center py-12 text-white">
          <p>
            <strong>© 2025 Banco do Brasil.</strong> Todos os direitos
            reservados.
          </p>
          <svg
            width="66"
            height="66"
            viewBox="0 0 66 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_7_9743)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.000328064 22.0169L13.6784 31.1125L30.0943 20.1976L23.2556 15.6474L32.1462 9.73599L51.2988 22.4709L19.8347 43.3923L26.6758 47.9407L65.6622 22.0169L32.8292 0.184082L0.000328064 22.0169ZM65.6622 43.8486L32.8292 65.6797L0.000328064 43.8486L38.9849 17.9225L45.8272 22.4709L14.3637 43.3935L33.5128 56.129L42.4052 50.2175L35.5676 45.6686L51.9812 34.7513L65.6622 43.8486ZM65.6622 9.28086L58.8205 13.8298L51.9812 9.28086L65.6622 0.184082V9.28086ZM0.000328064 56.5841V65.6797L13.6784 56.5841L6.83965 52.0369L0.000328064 56.5841Z"
                fill="#FCFC30"
              />
            </g>
            <defs>
              <clipPath id="clip0_7_9743">
                <rect
                  width="65.6618"
                  height="65.4956"
                  fill="white"
                  transform="translate(0 0.184082)"
                />
              </clipPath>
            </defs>
          </svg>
          <p>
            Confira a nossa{" "}
            <a href="#" className="text-amarelo-bb font-bold" target="_blank">
              Política de Privacidade.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
