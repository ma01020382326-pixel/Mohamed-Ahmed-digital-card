import { useEffect, useId } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ title, onClose, children }: ModalProps) {
  const titleId = useId();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090E11]/85 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <m.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[420px] rounded-3xl border border-[#252C30] bg-[#12181D] p-6 sm:p-7 text-[#F0F2DB] shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(197,255,0,0.08)]"
      >
        <div className="flex items-center justify-between gap-4">
          <h2 id={titleId} className="font-display text-lg font-bold tracking-tight text-[#F0F2DB]">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-[#252C30] bg-[#090E11] text-[#ADB5AD] transition-colors hover:border-[#C5FF00]/50 hover:text-[#C5FF00]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </m.div>
    </div>
  );
}
