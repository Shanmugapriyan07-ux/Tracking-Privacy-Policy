import { mailto, siteConfig } from '../data/siteConfig.js';

const link = 'rounded px-1 py-2 text-sm text-muted transition-colors hover:text-brand';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">© {siteConfig.year} {siteConfig.appName}</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5">
            <a href="#top" className={link}>Privacy Policy</a>
            <a href={mailto} className={link}>Contact Support</a>
            {siteConfig.termsUrl && <a href={siteConfig.termsUrl} className={link}>Terms of Service</a>}
          </nav>
        </div>
        <p className="mt-6 text-sm text-muted">Delivery operations made simpler.</p>
      </div>
    </footer>
  );
}
