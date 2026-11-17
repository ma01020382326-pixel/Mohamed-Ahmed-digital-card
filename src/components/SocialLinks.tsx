import { m } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { validSocials } from '../config';
import { BrandIcon } from './Icons';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function SocialLinks() {
  return (
    <section id="connect" aria-labelledby="social-title" className="mx-auto max-w-[860px] pb-24">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: easeOutExpo }}
        className="text-center mb-6"
      >
        <h2 id="social-title" className="font-display text-xl font-bold tracking-tight text-[#F0F2DB]">
          Connect with me
        </h2>
        <p className="mt-1 text-xs text-[#ADB5AD]">Direct links across social platforms</p>
      </m.div>

      {/* Acid Phase dark steel card layout */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {validSocials.map((social, idx) => (
          <m.div
            key={social.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 + idx * 0.05, ease: easeOutExpo }}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.985 }}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-[#252C30] bg-[#12181D] p-3.5 shadow-2xs backdrop-blur-xs transition-all duration-150 hover:border-[#C5FF00]/50 hover:bg-[#172026] hover:shadow-[0_4px_20px_rgba(197,255,0,0.08)]"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#090E11] border border-[#252C30] text-[#C5FF00] transition-colors group-hover:bg-[#C5FF00] group-hover:text-[#090E11] group-hover:border-[#C5FF00]">
                  <BrandIcon name={social.id} size={20} />
                </div>
                <div className="min-w-0 text-left">
                  <div className="font-display text-sm font-semibold text-[#F0F2DB] group-hover:text-[#C5FF00] transition-colors">
                    {social.label}
                  </div>
                  <div className="truncate text-xs text-[#ADB5AD]">{social.handle}</div>
                </div>
              </div>

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[#ADB5AD] transition-colors group-hover:text-[#C5FF00]">
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </m.div>
        ))}
      </div>
    </section>
  );
}
