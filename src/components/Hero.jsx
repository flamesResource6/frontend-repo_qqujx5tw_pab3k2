import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/tQoseAAHmVqmck9e/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Профессиональный прокат светового и звукового оборудования
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
          Ламповый Прокат
          <span className="block text-yellow-400">создаём свет и звук вашей идеи</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
          Технологичность, эстетика и безупречная реализация мероприятий любого масштаба — от камерных свадеб до крупных конференций.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:brightness-110 transition shadow-[0_0_50px_rgba(250,204,21,0.35)]">
            Обсудить проект
          </a>
          <a href="#cases" className="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition">
            Наши кейсы
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center w-full">
          {["700+ мероприятий", "10+ лет опыта", "100% вовлечённость", "Top equipment"].map((stat) => (
            <div key={stat} className="bg-white/5 border border-white/10 rounded-2xl py-4 text-white/90">
              {stat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
