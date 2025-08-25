import imgTiempoCard from '../../assets/img/LandingPage/img_tiempo.jpg';
import imgAspirantes from '../../assets/img/LandingPage/imgAspirantes.jpg';
import imgPersonas2 from '../../assets/img/LandingPage/img_personas2.jpg';
import imgFondoValle from '../../assets/img/LandingPage/imagenPrincipal.jpg'; 
import imgColombiano from '../../assets/img/LandingPage/imgcolombiano.jpg';

function LandingPage() {
  return (
    <div className="min-h-[80vh] bg-gray-50 flex flex-col items-center px-2 md:px-4 py-0 md:py-8">
      {/* HERO */}
  <section className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 py-16 mb-12 overflow-hidden">
        {/* Fondo con opacidad/desvanecido */}
        <img src={imgFondoValle} alt="Valle del Cocora" className="absolute inset-0 w-full h-full object-cover opacity-85" style={{zIndex:1, filter:'blur(1px)'}} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffde59]/30 via-white/80 to-[#A67AFF]/10" style={{zIndex:2}}></div>
        <div className="relative flex-1 flex flex-col items-center md:items-start text-center md:text-left px-4 max-w-3xl mx-auto" style={{zIndex:3}}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5e17eb] mb-4 drop-shadow">Conectamos talento y oportunidades en Colombia</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">TurboEmpleo conecta aspirantes y empresas en tiempo récord. Postúlate o contrata sin complicaciones y ahorra el recurso más valioso: tu tiempo.</p>
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center md:justify-start">
            <a href="/register" className="bg-[#5e17eb] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#A67AFF] transition">Regístrate gratis</a>
            <a href="/register" className="bg-[#ffde59] text-[#5e17eb] px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#A67AFF] hover:text-white transition">Publica una oferta</a>
          </div>
        </div>
        <div className="relative flex-1 flex justify-center items-center max-w-md mx-auto" style={{zIndex:3}}>
          <img src={imgColombiano} alt="Colombianos conectando oportunidades" className="w-full max-w-md h-72 object-cover rounded-2xl shadow-xl border-4 border-white" />
        </div>
      </section>

      {/* TU RECURSO MÁS VALIOSO: TU TIEMPO */}
      <section className="w-full max-w-4xl mx-auto py-10 px-4 md:px-8 mb-12 bg-white rounded-2xl shadow flex flex-col items-center text-center gap-6">
        <img src={imgTiempoCard} alt="Tiempo" className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full border-4 border-[#5e17eb] shadow mb-2" />
        <h2 className="text-2xl md:text-3xl font-bold text-[#5e17eb] flex items-center gap-2">⏳ Tu recurso más valioso: tu tiempo</h2>
        <p className="text-gray-700 text-lg max-w-2xl">En TurboEmpleo creemos que el tiempo es el activo más importante. Por eso nuestra plataforma está diseñada para que todo sea rápido y eficiente, desde el registro hasta la contratación.</p>
        <ul className="flex flex-col md:flex-row gap-4 w-full justify-center mt-2">
          <li className="flex-1 bg-[#f6f3ff] rounded-xl p-4 font-semibold text-[#5e17eb] shadow">Postúlate en minutos, no en horas.</li>
          <li className="flex-1 bg-[#f6f3ff] rounded-xl p-4 font-semibold text-[#5e17eb] shadow">Publica vacantes en minutos.</li>
          <li className="flex-1 bg-[#f6f3ff] rounded-xl p-4 font-semibold text-[#5e17eb] shadow">Recibe respuestas en tiempo récord.</li>
        </ul>
      </section>

      {/* BENEFICIOS */}
      <section className="w-full max-w-6xl py-16 px-2 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Aspirantes */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6 border-t-4 border-[#5e17eb] hover:scale-[1.02] transition-transform">
          <img src={imgAspirantes} alt="Aspirantes buscando empleo" className="w-40 h-40 object-cover rounded-xl shadow border-2 border-[#5e17eb]" />
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Para Aspirantes</h2>
            <ul className="text-gray-700 text-left list-disc pl-5 mb-2">
              <li>Postúlate en segundos y recibe respuesta en tiempo récord.</li>
              <li>Filtra empleos en Colombia según tu perfil y ubicación.</li>
              <li>Recibe notificaciones inmediatas de nuevas vacantes.</li>
              <li>Optimiza tu tiempo con un perfil profesional digital.</li>
            </ul>
          </div>
        </div>
        {/* Empresas */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6 border-t-4 border-[#A67AFF] hover:scale-[1.02] transition-transform">
          <img src={imgPersonas2} alt="Empresario viendo perfiles" className="w-40 h-40 object-cover rounded-xl shadow border-2 border-[#A67AFF]" />
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Para Empresas</h2>
            <ul className="text-gray-700 text-left list-disc pl-5 mb-2">
              <li>Publica vacantes en minutos sin procesos engorrosos.</li>
              <li>Accede rápidamente a candidatos filtrados por experiencia.</li>
              <li>Ahorra tiempo con herramientas de preselección.</li>
              <li>Gestiona tus procesos de contratación en un solo lugar.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA TURBOEMPLEO */}
      <section className="w-full max-w-4xl mx-auto py-12 px-4 md:px-8 mb-12 bg-white rounded-2xl shadow flex flex-col items-center text-center gap-6 relative overflow-hidden">
          <div className="relative z-10 w-full flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#5e17eb] flex items-center gap-2">⚡ Cómo funciona TurboEmpleo</h2>
          <p className="text-gray-700 text-lg max-w-2xl">En solo tres pasos puedes lograr lo que antes tomaba semanas.</p>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
            <div className="flex-1 bg-[#f6f3ff] rounded-xl p-6 flex flex-col items-center mb-4 md:mb-0">
              <h3 className="font-bold text-[#5e17eb] mb-2">Aspirantes</h3>
              <ol className="list-decimal text-gray-700 text-left pl-5">
                <li>Regístrate</li>
                <li>Postúlate</li>
                <li>Obtén entrevistas</li>
              </ol>
            </div>
            <div className="flex-1 bg-[#f6f3ff] rounded-xl p-6 flex flex-col items-center">
              <h3 className="font-bold text-[#A67AFF] mb-2">Empresas</h3>
              <ol className="list-decimal text-gray-700 text-left pl-5">
                <li>Crea tu cuenta</li>
                <li>Publica vacante</li>
                <li>Conecta con talento</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIALES */}
      <section className="w-full max-w-6xl py-12 px-2 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-b-4 border-[#ffde59] hover:scale-105 transition-transform">
          <span className="text-4xl mb-2">⚡</span>
          <span className="font-semibold">Postulación en segundos</span>
          <p className="text-gray-600 text-sm mt-1">Crea tu perfil y aplica sin llenar formularios eternos.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-b-4 border-[#5e17eb] hover:scale-105 transition-transform">
          <span className="text-4xl mb-2">📩</span>
          <span className="font-semibold">Respuestas rápidas</span>
          <p className="text-gray-600 text-sm mt-1">Recibe notificaciones inmediatas cuando una empresa ve tu perfil o vacante.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-b-4 border-[#A67AFF] hover:scale-105 transition-transform">
          <span className="text-4xl mb-2">🔍</span>
          <span className="font-semibold">Filtros inteligentes</span>
          <p className="text-gray-600 text-sm mt-1">Encuentra lo que buscas en minutos gracias a búsquedas avanzadas.</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border-b-4 border-[#5e17eb] hover:scale-105 transition-transform">
          <span className="text-4xl mb-2">📊</span>
          <span className="font-semibold">Todo en un solo lugar</span>
          <p className="text-gray-600 text-sm mt-1">Gestiona tu proceso de selección sin perder tiempo en múltiples portales.</p>
        </div>
      </section>

      {/* QUIÉNES SOMOS, MISIÓN, VISIÓN */}
      <section className="w-full max-w-4xl py-14 px-6 md:px-12 flex flex-col gap-10 mb-8 bg-white rounded-2xl shadow border border-gray-100 items-center text-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#5e17eb] mb-2">🧑‍💻 Quiénes somos</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            TurboEmpleo es un proyecto académico desarrollado por estudiantes del SENA, que busca demostrar cómo la innovación puede responder a un problema real: la falta de empleos accesibles y procesos ágiles en Colombia.
          </p>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Nuestra meta es brindar a aspirantes y empresarios una alternativa digital que reduzca tiempos y simplifique la búsqueda de empleo y talento.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#A67AFF] mb-2">🌟 Misión</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Facilitar la conexión entre aspirantes y empresas en Colombia mediante una plataforma digital ágil y segura, que permita obtener resultados en el menor tiempo posible.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#A67AFF] mb-2">🚀 Visión</h3>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Ser la plataforma de referencia en Colombia para la búsqueda y gestión de empleo, reconocida por su rapidez, innovación tecnológica y aporte a la reducción del desempleo.
          </p>
        </div>
      </section>

      {/* CONFIANZA Y SEGURIDAD */}
      <section className="w-full max-w-4xl py-8 px-2 md:px-0 flex flex-col items-center mb-8">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 bg-[#5e17eb] bg-opacity-10 rounded-full flex items-center justify-center text-[#5e17eb] text-3xl">
            🔒
          </div>
          <h2 className="text-2xl font-bold text-[#5e17eb] mb-2">
            Confianza y seguridad
          </h2>
          <ul className="list-disc pl-6 text-gray-700 text-left">
            <li>Tu información siempre protegida con altos estándares.</li>
            <li>Cumplimiento con normativas de protección de datos.</li>
            <li>Transparencia y respaldo como proyecto académico del SENA.</li>
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="w-full max-w-4xl py-8 flex flex-col items-center mb-8">
        <a
          href="/register"
          className="bg-[#5e17eb] text-white px-8 py-4 rounded-xl text-xl font-bold shadow hover:bg-[#A67AFF] transition"
        >
          Encuentra tu empleo hoy
        </a>
      </section>

    </div>
  );
}

export default LandingPage;
