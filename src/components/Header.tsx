import { byId, profile } from '../config';

interface HeaderProps {
  onContact: () => void;
}

export default function Header({ onContact }: HeaderProps) {
  const github = byId('github');

  return (
    <header className="sticky top-0 z-30 border-b border-[#252C30] bg-[#090E11]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[960px] items-center justify-between gap-6 px-6 py-4">
        <a
          href="#about"
          className="font-display text-lg font-bold tracking-tight text-[#F0F2DB] transition-colors hover:text-[#C5FF00]"
        >
          {profile.brand}
        </a>

        <div className="flex items-center gap-4">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm font-medium text-[#F0F2DB] transition-colors hover:text-[#C5FF00] sm:inline-block"
            >
              GitHub
            </a>
          )}
          <button
            type="button"
            onClick={onContact}
            className="cursor-pointer rounded-xl bg-[#C5FF00] px-4 py-2 text-sm font-semibold text-[#090E11] shadow-[0_0_16px_rgba(197,255,0,0.22)] transition-all duration-150 hover:bg-[#D4FF38] hover:shadow-[0_0_24px_rgba(197,255,0,0.38)] active:scale-95"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
