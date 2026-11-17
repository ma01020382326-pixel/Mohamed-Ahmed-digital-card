import { useEffect, useRef, useState } from 'react';
import { Check, Copy, Download } from 'lucide-react';
import QRCode from 'qrcode';
import { siteUrl } from '../config';
import Modal from './Modal';

interface QRCodeModalProps {
  onClose: () => void;
}

export default function QRCodeModal({ onClose }: QRCodeModalProps) {
  const url = siteUrl || (typeof window !== 'undefined' ? window.location.origin + '/' : 'https://mohamed-ahmed.app/');
  const [svgString, setSvgString] = useState<string>('');
  const [copiedMessage, setCopiedMessage] = useState('');
  const timerRef = useRef<number | null>(null);

  // Reliable fallback QR image URL if SVG generation encounters any issue
  const fallbackQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(url)}&color=197-255-0&bgcolor=9-14-17`;

  useEffect(() => {
    let alive = true;
    try {
      QRCode.toString(
        url,
        {
          type: 'svg',
          width: 220,
          margin: 1,
          color: {
            dark: '#C5FF00', // Acid Field
            light: '#00000000',
          },
        },
        (err, string) => {
          if (!err && alive && string) {
            setSvgString(string);
          }
        },
      );
    } catch {
      // Fallback will display seamlessly
    }

    return () => {
      alive = false;
    };
  }, [url]);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const copyLink = async () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopiedMessage('Link copied to clipboard');
    } catch {
      setCopiedMessage('Copy failed — select the link manually');
    }

    timerRef.current = window.setTimeout(() => {
      setCopiedMessage('');
    }, 2500);
  };

  const downloadSvg = () => {
    if (svgString) {
      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = objectUrl;
      a.download = 'mohamed-ahmed-qr.svg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);
    } else {
      window.open(fallbackQrUrl, '_blank');
    }
  };

  return (
    <Modal title="Share Profile QR" onClose={onClose}>
      <div className="mx-auto flex h-[210px] w-[210px] items-center justify-center rounded-2xl border border-[#252C30] bg-[#090E11] p-3 shadow-inner">
        {svgString ? (
          <div
            className="flex h-[186px] w-[186px] items-center justify-center [&>svg]:h-full [&>svg]:w-full"
            dangerouslySetInnerHTML={{ __html: svgString }}
          />
        ) : (
          <img
            src={fallbackQrUrl}
            width={186}
            height={186}
            alt={`QR code for ${url}`}
            className="block h-[186px] w-[186px] rounded-lg"
          />
        )}
      </div>

      <p className="mt-3.5 text-center text-xs text-[#ADB5AD]">
        Scan to visit my portfolio
      </p>
      <p className="mt-1 break-all text-center font-mono text-xs text-[#C5FF00]">
        {url}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <button
          type="button"
          onClick={downloadSvg}
          className="inline-flex min-h-[40px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#C5FF00] px-4 py-2 text-xs font-semibold text-[#090E11] transition-colors hover:bg-[#D4FF38] shadow-[0_0_16px_rgba(197,255,0,0.22)]"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Download QR</span>
        </button>

        <button
          type="button"
          onClick={copyLink}
          className="inline-flex min-h-[40px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#252C30] bg-[#090E11] px-4 py-2 text-xs font-semibold text-[#F0F2DB] transition-colors hover:border-[#C5FF00]/50 hover:bg-[#172026]"
        >
          {copiedMessage ? (
            <Check className="h-3.5 w-3.5 text-[#C5FF00]" aria-hidden="true" />
          ) : (
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          <span>{copiedMessage ? 'Copied' : 'Copy Link'}</span>
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className="mt-2 min-h-[18px] text-center text-xs text-[#ADB5AD]"
      >
        {copiedMessage}
      </p>
    </Modal>
  );
}
