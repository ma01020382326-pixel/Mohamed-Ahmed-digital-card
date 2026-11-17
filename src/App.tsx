import { useState } from 'react';
import { domAnimation, LazyMotion, MotionConfig, AnimatePresence, m } from 'motion/react';
import { Info, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import ContactModal from './components/ContactModal';
import QRCodeModal from './components/QRCodeModal';
import { profile } from './config';

type ModalType = 'contact' | 'qr' | null;

export default function App() {
  const [modal, setModal] = useState<ModalType>(null);
  const [showAlert, setShowAlert] = useState(true);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div className="flex min-h-screen flex-col bg-[#090E11] text-[#F0F2DB] antialiased">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#C5FF00] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#090E11]"
          >
            Skip to content
          </a>

          <Header onContact={() => setModal('contact')} />

          <main id="main-content" className="mx-auto w-full max-w-[960px] flex-1 px-5 sm:px-6">
            {/* Top Notice Alert Banner */}
            <AnimatePresence>
              {showAlert && (
                <m.div
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  role="alert"
                  className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-[#C5FF00]/35 bg-[#12181D] px-5 py-4 text-sm sm:text-base text-[#F0F2DB] shadow-[0_0_25px_rgba(197,255,0,0.07)] backdrop-blur-xs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Info className="h-5 w-5 shrink-0 text-[#C5FF00]" aria-hidden="true" />
                    <span className="font-medium">
                      This is not a full portfolio — this is just a quick personal bio about me.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAlert(false)}
                    aria-label="Dismiss alert"
                    className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-[#ADB5AD] transition-colors hover:bg-[#1E272E] hover:text-[#C5FF00]"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </m.div>
              )}
            </AnimatePresence>

            <Hero onContact={() => setModal('contact')} onQR={() => setModal('qr')} />
            <SocialLinks />
          </main>

          <footer className="border-t border-[#252C30] bg-[#0C1114]/90 py-8 backdrop-blur-xs">
            <div className="mx-auto flex max-w-[960px] flex-col items-center justify-between gap-4 px-6 text-xs text-[#ADB5AD] sm:flex-row">
              <p className="text-[#F0F2DB]">
                © {new Date().getFullYear()} {profile.name}
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#about"
                  className="text-[#F0F2DB] transition-colors hover:text-[#C5FF00]"
                >
                  Back to top
                </a>
                <button
                  type="button"
                  onClick={() => setModal('qr')}
                  className="cursor-pointer text-[#F0F2DB] transition-colors hover:text-[#C5FF00]"
                >
                  Share QR
                </button>
              </div>
            </div>
          </footer>

          <AnimatePresence>
            {modal === 'contact' && <ContactModal onClose={() => setModal(null)} />}
            {modal === 'qr' && <QRCodeModal onClose={() => setModal(null)} />}
          </AnimatePresence>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
