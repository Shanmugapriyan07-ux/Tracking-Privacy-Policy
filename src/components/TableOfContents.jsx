import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function List({ sections, activeId, onPick }) {
  return (
    <ol className="space-y-0.5">
      {sections.map((s, i) => {
        const active = s.id === activeId;
        return (
          <li key={s.id}>
            <a href={`#${s.id}`} onClick={onPick} aria-current={active ? 'location' : undefined}
              className={`flex min-h-[44px] items-center gap-2.5 rounded-lg border-l-2 px-3 py-2 text-sm transition-colors duration-200 lg:min-h-0 ${active ? 'border-brand bg-brand-soft font-semibold text-brand' : 'border-transparent text-muted hover:text-ink'}`}>
              <span className="w-5 shrink-0 tabular-nums">{i + 1}.</span>
              <span>{s.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export default function TableOfContents({ sections, activeId }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Mobile / tablet: collapsible */}
      <div className="rounded-2xl border border-line bg-white lg:hidden">
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="toc-mobile"
          className="flex min-h-[52px] w-full items-center justify-between rounded-2xl px-4 text-left font-semibold text-ink">
          Contents
          <ChevronDown aria-hidden="true" className={`h-5 w-5 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <nav id="toc-mobile" aria-label="Table of contents" className="border-t border-line p-2">
            <List sections={sections} activeId={activeId} onPick={() => setOpen(false)} />
          </nav>
        )}
      </div>
      {/* Desktop: sticky sidebar */}
      <nav aria-label="Table of contents" className="sticky top-24 hidden lg:block">
        <p className="mb-3 px-3 text-sm font-semibold text-ink">On this page</p>
        <List sections={sections} activeId={activeId} />
      </nav>
    </>
  );
}
