import type { SocialId } from '../config';

interface BrandIconProps {
  name: SocialId;
  size?: number;
  className?: string;
}

const brandPaths: Record<SocialId, React.ReactNode> = {
  whatsapp: (
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
  ),
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  tiktok: <path d="M9 12a4 4 0 1 0 4 4V3a5 5 0 0 0 5 5" />,
  github: (
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.3 6.4-1.5 6.4-7A5.4 5.4 0 0 0 20 4.8 5.1 5.1 0 0 0 19.9 1S18.7.7 16 2.5a13.4 13.4 0 0 0-7 0C6.3.7 5.1 1 5.1 1A5.1 5.1 0 0 0 5 4.8a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.4 7A3.4 3.4 0 0 0 9 18.1V22" />
  ),
};

export const brandAccents: Record<SocialId, string> = {
  whatsapp: 'text-emerald-600 dark:text-emerald-400',
  facebook: 'text-blue-600 dark:text-blue-400',
  instagram: 'text-rose-600 dark:text-rose-400',
  tiktok: 'text-slate-900 dark:text-zinc-100',
  github: 'text-slate-900 dark:text-zinc-100',
};

export function BrandIcon({ name, size = 20, className = '' }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {brandPaths[name]}
    </svg>
  );
}
