import { useEffect, useState } from 'react';
import { Menu, Navigation, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig.js';

const links = [
  { href: '#top', label: 'Privacy Policy', current: true },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`sticky top-0 z-40 border-b bg-white/85 backdrop-blur transition-shadow duration-300 ${scrolled ? 'border-line shadow-[0_1px_8px_rgba(23,23,23,0.06)]' : 'border-line'}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 rounded-lg font-semibold tracking-tight text-ink">
          <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
            <Navigation className="h-4 w-4" />
          </span>
          {siteConfig.appName}
        </a>

        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} aria-current={l.current ? 'page' : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-soft hover:text-brand ${l.current ? 'text-brand' : 'text-muted'}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-brand-soft sm:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-white px-4 py-2 sm:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} aria-current={l.current ? 'page' : undefined}
                className="flex min-h-[48px] items-center rounded-lg px-3 text-base font-medium text-ink hover:bg-brand-soft">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
