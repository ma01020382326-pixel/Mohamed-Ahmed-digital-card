import { ArrowUpRight } from 'lucide-react';
import { byId, contactIds } from '../config';
import { BrandIcon } from './Icons';
import Modal from './Modal';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const items = contactIds
    .map((id) => byId(id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <Modal title="Contact Me" onClose={onClose}>
      <p className="text-xs text-[#ADB5AD]">
        Pick whichever channel is easiest for you to reach out.
      </p>

      <ul className="mt-4 grid gap-2.5">
        {items.map((social) => (
          <li key={social.id}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[50px] items-center justify-between gap-3 rounded-2xl border border-[#252C30] bg-[#090E11] px-4 py-2.5 transition-colors duration-150 hover:border-[#C5FF00]/50 hover:bg-[#172026]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#12181D] text-[#C5FF00] shadow-2xs border border-[#252C30] group-hover:bg-[#C5FF00] group-hover:text-[#090E11] group-hover:border-[#C5FF00] transition-colors">
                  <BrandIcon name={social.id} size={19} />
                </div>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#F0F2DB] group-hover:text-[#C5FF00] transition-colors">
                    {social.label}
                  </div>
                  <div className="text-[11px] text-[#ADB5AD]">{social.handle}</div>
                </div>
              </div>

              <ArrowUpRight
                className="h-4 w-4 text-[#ADB5AD] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C5FF00]"
                aria-hidden="true"
              />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </Modal>
  );
}
