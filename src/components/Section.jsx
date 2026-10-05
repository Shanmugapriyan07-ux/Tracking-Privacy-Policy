// Generic full-width band used for the summary and trust areas.
export default function Section({ id, title, tone = 'white', children }) {
  const bg = tone === 'sand' ? 'bg-sand' : tone === 'soft' ? 'bg-brand-soft/60' : 'bg-white';
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`${bg} py-14 sm:py-16`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
