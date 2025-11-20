import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "О нас" },
    { href: "#services", label: "Услуги" },
    { href: "#cases", label: "Кейсы" },
    { href: "#contact", label: "Контакты" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-amber-500/30" />
          <div className="leading-tight">
            <div className="font-bold text-white tracking-tight">Ламповый Прокат</div>
            <div className="text-xs text-white/60">свет • звук • сцена</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:brightness-110 transition shadow-[0_0_30px_rgba(250,204,21,0.35)]"
          >
            Получить консультацию
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/15 text-white/90"
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть меню"
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-white/90"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold"
            >
              Получить консультацию
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
