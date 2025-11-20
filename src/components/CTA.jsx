export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-slate-950 to-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-yellow-400/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 h-60 w-60 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-4xl font-bold text-white">Готовы обсудить ваш проект?</h3>
              <p className="mt-3 text-white/70 max-w-xl">Расскажите, какой у вас формат — мы предложим оптимальный сетап и возьмём на себя всю техническую часть.</p>
            </div>
            <div className="flex lg:justify-end">
              <a href="mailto:hello@lampovyi.prokat" className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:brightness-110 transition shadow-[0_0_50px_rgba(250,204,21,0.35)]">
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
