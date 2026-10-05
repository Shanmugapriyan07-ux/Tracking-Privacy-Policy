import { iconMap as Icons } from './icons.js';
import PolicyCard from './PolicyCard.jsx';

export default function PermissionCard({ icon, title, text }) {
  const Icon = Icons[icon] || Icons.Info;
  return (
    <PolicyCard as="div">
      <div className="flex items-start gap-4">
        <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-base leading-7 text-[#374151]">{text}</p>
        </div>
      </div>
    </PolicyCard>
  );
}
