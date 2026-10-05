import { Mail, Trash2 } from 'lucide-react';
import Button from './Button.jsx';
import { mailto, siteConfig } from '../data/siteConfig.js';

// variant="deletion" is the distinct card inside the Data Deletion section; default is the Contact Us block.
export default function ContactCard({ variant = 'contact' }) {
  const isDeletion = variant === 'deletion';
  const Icon = isDeletion ? Trash2 : Mail;
  return (
    <div className={`mt-6 rounded-2xl border p-6 sm:p-8 ${isDeletion ? 'border-brand/25 bg-brand-soft' : 'border-line bg-sand'}`}>
      <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
        <Icon className="h-5 w-5" />
      </span>
      {isDeletion ? (
        <>
          <h3 className="mt-4 text-xl font-semibold text-ink">Need your data deleted?</h3>
          <p className="mt-2 text-base leading-7 text-[#374151]">You can contact us to request deletion of your personal information and location history.</p>
          <Button href={mailto} arrow className="mt-5 w-full sm:w-auto">Request Data Deletion</Button>
        </>
      ) : (
        <>
          <h3 className="mt-4 text-xl font-semibold text-ink">Questions about privacy?</h3>
          <p className="mt-2 text-base leading-7 text-[#374151]">If you have questions about this Privacy Policy or would like to request deletion of your personal data, please contact us.</p>
          <p className="mt-4 break-all font-medium text-ink">{siteConfig.supportEmail}</p>
          <Button href={mailto} arrow className="mt-5 w-full sm:w-auto">Contact Support</Button>
        </>
      )}
    </div>
  );
}
