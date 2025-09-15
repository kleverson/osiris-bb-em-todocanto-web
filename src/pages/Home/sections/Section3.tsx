import Sanfoneiro from "../../../assets/images/safoneiro.png";
export function Section3() {
  return (
    <div id="premios" className="relative bg-amarelo-bb py-8">
      <div className="max-w-6xl mx-auto w-full px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="z-20 space-y-10">
          <h2 className="text-3xl lg:text-5xl text-azul-bb font-black font-bb-titulos">
            Sua música pode valer muito mais do que aplausos!
          </h2>
          <div className="space-y-5">
            <div className="flex items-center gap-6">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_104_14660)">
                  <path
                    d="M20.0487 46.18C18.0855 41.5662 30.8769 34.8973 34.3617 40.1156C37.8466 45.3338 22.0934 50.9886 20.0487 46.18Z"
                    fill="#FF6E91"
                  />
                  <path
                    d="M40 13.1713L34.9595 8C26.1489 9.94762 16 15.9382 16 15.9382L33.1322 41.096L34.3617 40.1088L20.2049 19.2962L40 13.1713Z"
                    fill="#FF6E91"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_14660">
                    <rect
                      width="24"
                      height="40"
                      fill="white"
                      transform="translate(16 8)"
                    />
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
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_104_14670)">
                  <path
                    d="M3.09877 31.0514C4.41615 26.8893 16.5406 29.6206 15.8777 35.0378C15.2148 40.455 1.72778 35.3863 3.09877 31.0514Z"
                    fill="#FF6E91"
                  />
                  <path
                    d="M37.7401 41.6648C39.0574 37.5027 51.1819 40.234 50.519 45.6512C49.8561 51.0684 36.3691 45.9997 37.7401 41.6648Z"
                    fill="#FF6E91"
                  />
                  <path
                    d="M51.6897 23.2401L52 17.2789C46.2199 14.6978 17.5843 8 17.5843 8L14.5151 35.0038L15.8748 35.0378L18.3601 13.284L51.6897 23.2373V23.2401Z"
                    fill="#FF6E91"
                  />
                  <path
                    d="M50.519 45.6512L52 17.2789L50.1833 17.8682L49.4414 45.4274L50.519 45.6512Z"
                    fill="#FF6E91"
                  />
                  <path
                    d="M22.363 27.3399C23.6804 23.1778 35.8049 25.9091 35.142 31.3263C34.4791 36.7435 20.9921 31.6747 22.363 27.3399Z"
                    fill="#FF6E91"
                  />
                  <path
                    d="M35.1392 31.3262L36.1265 13.3775L34.3465 12.5077L34.0644 31.1024L35.1392 31.3262Z"
                    fill="#FF6E91"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_104_14670">
                    <rect
                      width="49"
                      height="40"
                      fill="white"
                      transform="translate(3 8)"
                    />
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
          <p className="sm:text-2xl text-azul-bb font-light">
            Preparados para turbinar o talento?
          </p>
          <button className="px-7 py-3 font-bold bg-azul-bb text-white uppercase rounded-sm hover:scale-105 duration-300 cursor-pointer">
            confira o regulamento
          </button>
        </div>
        <div className="z-20">
          <img src={Sanfoneiro} alt="Sanfoneiro" />
        </div>
      </div>
    </div>
  );
}
