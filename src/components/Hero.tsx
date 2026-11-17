import { useState } from 'react';
import { m } from 'motion/react';
import { QrCode, ArrowUpRight, Sparkles } from 'lucide-react';
import profilePhoto from '../assets/profile.webp';
import { byId, profile } from '../config';
import { BrandIcon } from './Icons';
import TechText from './TechText';

interface HeroProps {
  onContact: () => void;
  onQR: () => void;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export default function Hero({ onContact, onQR }: HeroProps) {
  const [imgError, setImgError] = useState(false);
  const github = byId('github');

  return (
    <section id="about" className="mx-auto max-w-[860px] pt-12 pb-16 sm:pt-20 sm:pb-24">
      {/* Modern Bento Hero Card in Acid Phase Palette */}
      <m.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
        className="relative overflow-hidden rounded-[32px] border border-[#252C30] bg-[#12181D] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.75),0_0_30px_rgba(197,255,0,0.05)] sm:p-10 lg:p-12"
      >
        {/* Soft Ambient Acid & Phase Blue Glows */}
        <div className="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-[#C5FF00]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#3635F5]/15 blur-3xl pointer-events-none" />

        {/* Robust Flexbox Alignment */}
        <div className="relative z-10 flex flex-col items-center md:flex-row md:items-center md:gap-8 lg:gap-12">
          
          {/* Fully Circular Avatar with Acid Rim Ring and Ambient Glow */}
          <m.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="relative shrink-0 mb-12 md:mb-0"
          >
            {/* Ambient Acid & Phase Blue Backdrop Glow */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#C5FF00]/25 via-[#3635F5]/20 to-transparent blur-xl" />
            
            {/* Circular Frame */}
            <m.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative h-40 w-40 sm:h-48 sm:w-48 overflow-hidden rounded-full border-4 border-[#090E11] bg-[#090E11] shadow-2xl ring-2 ring-[#C5FF00]/45"
            >
              {!imgError ? (
                <img
                  src={profilePhoto}
                  width={384}
                  height={384}
                  alt={`Portrait of ${profile.name}`}
                  fetchPriority="high"
                  decoding="sync"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-top rounded-full transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center bg-[#090E11] font-display text-4xl font-bold text-[#C5FF00] rounded-full"
                  role="img"
                  aria-label={`Portrait placeholder for ${profile.name}`}
                >
                  {profile.initials}
                </div>
              )}
            </m.div>

            {/* Floating Live Status Pill attached directly to the avatar */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3635F5]/60 bg-[#090E11]/95 px-3.5 py-1 text-[11px] font-semibold text-[#F0F2DB] shadow-lg backdrop-blur-xs">
                <span className="h-2 w-2 rounded-full bg-[#C5FF00] animate-pulse shadow-[0_0_8px_rgba(197,255,0,0.85)]" />
                <span>{profile.availability}</span>
              </span>
            </div>
          </m.div>

          {/* Identity & Content Column: Consistent Flexbox Stack */}
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left gap-3 sm:gap-3.5 w-full min-w-0">
            
            {/* Micro Kicker using Electric-Blue Phase Tab Accent */}
            <m.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F0F2DB] bg-[#3635F5]/20 px-3.5 py-1 rounded-full border border-[#3635F5]/55 shadow-2xs"
            >
              <Sparkles className="h-3 w-3 text-[#C5FF00]" />
              <span>{profile.title}</span>
            </m.div>

            {/* Graceful TechText Flex Area with Zero Overlapping & Consistent Headroom */}
            <div className="w-full min-h-[76px] sm:min-h-[88px] flex items-center justify-center md:justify-start overflow-visible py-1">
              <TechText
                text={profile.name}
                fontWeight={700}
                fontSize={110}
                reach={130}
                softness={0.6}
                dashLength={3}
                dashGap={2}
                strokeWidth={1.2}
                specks={8}
                labels={true}
                intro="assemble"
                introDuration={3.2}
                speed={0.6}
                clickKick
                guides={false}
                color="#F0F2DB"
                accentColor="#C5FF00"
              />
            </div>

            {/* Education Info */}
            <m.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.22, ease: easeOutExpo }}
              className="text-xs font-medium text-[#C5FF00] sm:text-sm"
            >
              {profile.education}
            </m.p>

            {/* Bio */}
            <m.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.28, ease: easeOutExpo }}
              className="max-w-[48ch] text-sm leading-relaxed text-[#ADB5AD] sm:text-base"
            >
              {profile.bio}
            </m.p>

            {/* Action Buttons with Proper Padding Offset */}
            <m.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: easeOutExpo }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 w-full pt-1.5"
            >
              <m.button
                type="button"
                onClick={onContact}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#C5FF00] px-5 py-2.5 text-sm font-semibold text-[#090E11] shadow-[0_0_20px_rgba(197,255,0,0.25)] transition-all hover:bg-[#D4FF38] hover:shadow-[0_0_26px_rgba(197,255,0,0.4)]"
              >
                Contact Me
              </m.button>

              {github && (
                <m.a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-xl border border-[#252C30] bg-[#090E11] px-4 py-2.5 text-sm font-semibold text-[#F0F2DB] shadow-2xs transition-colors hover:border-[#C5FF00]/50 hover:bg-[#192127] hover:text-[#C5FF00]"
                >
                  <BrandIcon name="github" size={17} />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#ADB5AD]" aria-hidden="true" />
                </m.a>
              )}

              <m.button
                type="button"
                onClick={onQR}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#252C30] bg-[#090E11] px-4 py-2.5 text-sm font-semibold text-[#F0F2DB] shadow-2xs transition-colors hover:border-[#3635F5]/70 hover:bg-[#192127] hover:text-[#C5FF00]"
              >
                <QrCode className="h-4 w-4 text-[#C5FF00]" aria-hidden="true" />
                <span>QR Code</span>
              </m.button>
            </m.div>

          </div>

        </div>
      </m.div>
    </section>
  );
}
