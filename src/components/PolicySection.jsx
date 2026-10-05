import { motion } from 'framer-motion';
import { Info } from 'lucide-react';
import ContactCard from './ContactCard.jsx';
import PermissionCard from './PermissionCard.jsx';
import { permissions } from '../data/privacyPolicy.js';

function Block({ block }) {
  switch (block.type) {
    case 'p': return <p>{block.text}</p>;
    case 'h3': return <h3 className="mt-8 text-lg font-semibold text-ink">{block.text}</h3>;
    case 'ul':
      return (
        <ul>
          {block.items.map((t) => (
            <li key={t} className="relative pl-6">
              <span aria-hidden="true" className="absolute left-1 top-[0.8rem] h-1.5 w-1.5 rounded-full bg-brand" />
              {t}
            </li>
          ))}
        </ul>
      );
    case 'ol': return <ol>{block.items.map((t) => <li key={t}>{t}</li>)}</ol>;
    case 'note':
      return (
        <div role="note" className="mt-5 flex gap-3 rounded-xl border border-brand/25 bg-brand-soft p-4">
          <Info aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />
          <p className="!mt-0 font-semibold !text-ink">{block.text}</p>
        </div>
      );
    case 'deletion': return <ContactCard variant="deletion" />;
    case 'contact': return <ContactCard />;
    case 'permissions':
      return (
        <div className="mt-5 grid gap-4">
          {permissions.map((p) => <PermissionCard key={p.title} {...p} />)}
        </div>
      );
    default: return null;
  }
}

export default function PolicySection({ id, number, title, content }) {
  return (
    <motion.section id={id} aria-labelledby={`${id}-title`}
      initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }} transition={{ duration: 0.4 }}
      className="border-t border-line py-10 first:border-t-0 first:pt-0">
      <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
        <span className="mr-2 text-brand">{number}.</span>{title}
      </h2>
      <div className="prose-policy">
        {content.map((b, i) => <Block key={i} block={b} />)}
      </div>
    </motion.section>
  );
}
