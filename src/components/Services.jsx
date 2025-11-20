export default function Services() {
  const services = [
    {
      title: "Световые решения",
      desc: "Архитектурная подсветка, динамический свет, сценические приборы и пиксельные инсталляции.",
      tags: ["Moving Head", "LED Wash", "Beam", "DMX"]
    },
    {
      title: "Звуковое оформление",
      desc: "Линейные массивы, сабвуферы, мониторинг, радиосистемы. Звукорежиссура под формат площадки.",
      tags: ["Line Array", "Sub", "RF", "FOH"]
    },
    {
      title: "Сцена и риггинг",
      desc: "Подиумы, фермовые конструкции, бэклайны, безопасный подвес и инженерия.",
      tags: ["Truss", "Rigging", "Stage"]
    },
    {
      title: "Техническое продюсирование",
      desc: "Полный цикл: проектирование, визуализация, логистика, монтаж, пусконаладка и сопровождение.",
      tags: ["CAD", "Previz", "PM"]
    },
  ];

  return (
    <section id="services" className="relative bg-gradient-to-b from-black to-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Что мы делаем</h2>
          <p className="mt-4 text-white/70">Команда инженеров, художников по свету и звукорежиссёров с большим опытом реализует идеи под ключ.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-yellow-400/10 blur-2xl group-hover:bg-yellow-400/20 transition" />
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-black/40 border border-white/10 text-white/70">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
