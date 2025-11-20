export default function Cases() {
  const cases = [
    {
      title: "Tech Summit 2024",
      desc: "Крупная конференция на 1500 гостей. Линейные массивы, медиафасады, динамический свет с таймкодом.",
      meta: "Конгресс-холл • 1500 гостей"
    },
    {
      title: "Intimate Wedding",
      desc: "Камерная свадьба в лофте. Тёплая архитектурная подсветка, невидимые акустические системы, живой звук.",
      meta: "Лофт-пространство • 120 гостей"
    },
    {
      title: "Urban Music Fest",
      desc: "Открытая площадка. Линии, сабвуферы, пиксельные трубы, дым-машины и надежный риггинг.",
      meta: "Опен-эйр • 3000 гостей"
    },
  ];

  return (
    <section id="cases" className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Наши кейсы</h2>
          <p className="mt-4 text-white/70">От камерных событий до масштабных фестивалей — безупречная организация и чистый саунд.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <article key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
              <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-500/10 border border-white/10 mb-4" />
              <div className="text-xs text-white/50">{c.meta}</div>
              <h3 className="mt-1 text-xl font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
