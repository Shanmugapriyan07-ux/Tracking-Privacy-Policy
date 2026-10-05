import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { iconMap as Icons } from '../components/icons.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Section from '../components/Section.jsx';
import PolicySection from '../components/PolicySection.jsx';
import PolicyCard from '../components/PolicyCard.jsx';
import TableOfContents from '../components/TableOfContents.jsx';
import { introduction, policySections, summaryCards, trustPoints } from '../data/privacyPolicy.js';
import { siteConfig } from '../data/siteConfig.js';

export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState(policySections[0].id);

  // Scroll-spy for the table of contents.
  useEffect(() => {
    const els = policySections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { rootMargin: '-96px 0px -65% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        {/* Hero */}
        <div id="top" className="relative overflow-hidden border-b border-line bg-brand-soft/60">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-semibold tracking-wide text-brand">
              <Icons.ShieldCheck aria-hidden="true" className="h-3.5 w-3.5" /> Privacy &amp; Security
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {siteConfig.appName} Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
              We respect your privacy and are committed to being transparent about how {siteConfig.appName} collects, uses, stores, and protects information.
            </p>
            <p className="mt-6 text-sm text-muted">
              Last updated: <time className="font-medium text-ink">{siteConfig.lastUpdated}</time>
            </p>
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Important notice */}
          <aside aria-label="Important notice" className="-mt-6 relative flex max-w-[850px] gap-4 rounded-2xl border border-brand/25 bg-white p-5 shadow-[0_6px_24px_rgba(109,74,255,0.10)] sm:p-6 lg:ml-[17rem]">
            <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <Icons.Info className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-ink">Important</p>
              <p className="mt-1 leading-7 text-[#374151]">
                {siteConfig.appName} is an internal application used by delivery drivers and dispatch administrators within our organization. It is not available for public self-service registration.
              </p>
            </div>
          </aside>

          {/* TOC + policy */}
          <div className="grid gap-8 py-10 lg:grid-cols-[240px_minmax(0,820px)] lg:gap-14 lg:py-14">
            <div><TableOfContents sections={policySections} activeId={activeId} /></div>
            <article aria-label="Privacy policy">
              <section aria-labelledby="intro-title" className="pb-10">
                <h2 id="intro-title" className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">Introduction</h2>
                <div className="prose-policy">{introduction.map((b, i) => <p key={i}>{b.text}</p>)}</div>
              </section>
              {policySections.map((s, i) => (
                <PolicySection key={s.id} number={i + 1} {...s} />
              ))}
            </article>
          </div>
        </div>

        {/* Summary */}
        <Section id="at-a-glance" title="Your Privacy at a Glance" tone="soft">
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {summaryCards.map(({ icon, title, text }) => {
              const Icon = Icons[icon];
              return (
                <li key={title}>
                  <PolicyCard className="h-full">
                    <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
                    <p className="mt-2 leading-7 text-muted">{text}</p>
                  </PolicyCard>
                </li>
              );
            })}
          </ul>
        </Section>

        {/* Trust */}
        <Section id="built-with-privacy" title="Built with privacy in mind" tone="sand">
          <ul className="mt-6 grid max-w-3xl gap-3">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-start gap-3 text-base leading-7 text-[#374151]">
                <Icons.Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />
                {t}
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}
