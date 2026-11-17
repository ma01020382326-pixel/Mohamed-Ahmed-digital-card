export type SocialId = 'whatsapp' | 'facebook' | 'instagram' | 'tiktok' | 'github';

export interface SocialLink {
  id: SocialId;
  label: string;
  handle: string;
  url: string;
}

export const profile = {
  brand: 'Mohamed Ahmed',
  name: 'Mohamed Ahmed Adel',
  initials: 'MA',
  title: 'React Frontend Developer',
  education: 'Student in 2nd Year Bakaloria (High School)',
  bio: '16-year-old student and aspiring React Frontend Developer, passionate about programming, modern web technologies, and building creative digital experiences.',
  availability: 'Online all day',
} as const;

export const siteUrl = '';

export const socials: SocialLink[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: 'Direct message',
    url: 'https://wa.me/201020382336',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'Profile',
    url: 'https://www.facebook.com/profile.php?id=61577167635568',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@mahamed__2010_',
    url: 'https://www.instagram.com/mahamed__2010_/?hl=ar',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    handle: '@mmmxm1234',
    url: 'https://www.tiktok.com/@mmmxm1234',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: '@ma01020382326-pixel',
    url: 'https://github.com/ma01020382326-pixel',
  },
];

export const contactIds: SocialId[] = ['whatsapp', 'instagram', 'facebook'];

export function safeUrl(url: string): string | null {
  try {
    return new URL(url).protocol === 'https:' ? url : null;
  } catch {
    return null;
  }
}

export const validSocials = socials.filter((item) => Boolean(safeUrl(item.url)));

export function byId(id: SocialId): SocialLink | undefined {
  return validSocials.find((item) => item.id === id);
}
