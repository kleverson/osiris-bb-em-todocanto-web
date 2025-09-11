import Sanfoneiro from "../../../assets/images/safoneiro.png";
export function Section3() {
  return (
    <div className="relative bg-amarelo-bb py-8">
      <div className="max-w-6xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="z-20 space-y-10">
          <h2 className="text-3xl lg:text-5xl text-azul-bb font-black font-bb-titulos">
            Sua música pode <br />
            valer muito mais <br />
            do que aplausos!
          </h2>
          <div className="space-y-5">
            <div className="flex items-center gap-6">
              <svg
                width="24"
                height="40"
                viewBox="0 0 24 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_104_5318)">
                  <path
                    d="M4.04868 38.18C2.08547 33.5662 14.8769 26.8973 18.3617 32.1156C21.8466 37.3338 6.0934 42.9886 4.04868 38.18Z"
                    fill="#FF6E91"
                  />
                  <path
                    d="M24 5.17126L18.9595 0C10.1489 1.94762 0 7.93821 0 7.93821L17.1322 33.096L18.3617 32.1088L4.20492 11.2962L24 5.17126Z"
                    fill="#FF6E91"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_5318">
                    <rect width="24" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-2xl text-azul-bb font-light">
                O melhor artista solo leva <br />
                <strong className="font-extrabold text-3xl">
                  50 mil pontos Livelo.
                </strong>
              </p>
            </div>
            <div className="flex items-center gap-6">
              <svg
                width="49"
                height="40"
                viewBox="0 0 49 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_104_5328)">
                  <path
                    d="M0.0987653 23.0514C1.41615 18.8893 13.5406 21.6206 12.8777 27.0378C12.2148 32.455 -1.27222 27.3863 0.0987653 23.0514Z"
                    fill="#FF6E91"
                  />
                  <path
                    d="M34.7401 33.6648C36.0574 29.5027 48.1819 32.234 47.519 37.6512C46.8561 43.0684 33.3691 37.9997 34.7401 33.6648Z"
                    fill="#FF6E91"
                  />
                  <path
                    d="M48.6897 15.2401L49 9.27894C43.2199 6.69783 14.5843 0 14.5843 0L11.5151 27.0038L12.8748 27.0378L15.3601 5.28403L48.6897 15.2373V15.2401Z"
                    fill="#FF6E91"
                  />
                  <path
                    d="M47.519 37.6512L49 9.27893L47.1833 9.86825L46.4414 37.4274L47.519 37.6512Z"
                    fill="#FF6E91"
                  />
                  <path
                    d="M19.363 19.3399C20.6804 15.1778 32.8049 17.9091 32.142 23.3263C31.4791 28.7435 17.9921 23.6747 19.363 19.3399Z"
                    fill="#FF6E91"
                  />
                  <path
                    d="M32.1392 23.3262L33.1265 5.3775L31.3465 4.50769L31.0644 23.1024L32.1392 23.3262Z"
                    fill="#FF6E91"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_5328">
                    <rect width="49" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-2xl text-azul-bb font-light">
                A melhor banda conquista <br />
                <strong className="font-extrabold text-3xl">
                  250 mil pontos Livelo.
                </strong>
              </p>
            </div>
          </div>
          <button className="px-7 py-3 font-bold bg-azul-bb text-white uppercase rounded-sm">
            confira o regulamento
          </button>
        </div>
        <div className="hidden lg:block z-20">
          <img src={Sanfoneiro} alt="Sanfoneiro" />
        </div>
      </div>
    </div>
  );
}
