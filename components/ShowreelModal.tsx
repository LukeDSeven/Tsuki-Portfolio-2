import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string; // Can be a URL (mp4) or a YouTube ID (e.g. "a0X9xGuKHvE")
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose, videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Heuristic: If it doesn't contain '.' or '/', assume it's a YouTube ID.
  const isYouTube = !videoSrc.includes('/') && !videoSrc.includes('.');

  // Handle ESC key and Body Scroll Lock
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
      
      // Autoplay for MP4 files
      if (!isYouTube && videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch((err) => console.warn("Video autoplay blocked:", err));
      }
    } else {
      document.body.style.overflow = 'unset';
      if (!isYouTube && videoRef.current) {
        videoRef.current.pause();
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose, isYouTube]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Showreel Video Player"
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-violet-500 transition-colors z-50 p-2"
        aria-label="Close modal"
      >
        <X size={40} />
      </button>

      {/* Video Container */}
      {isYouTube ? (
        <div 
          className="relative w-full max-w-7xl aspect-video bg-black shadow-2xl mx-6"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoSrc}?autoplay=1&rel=0&showinfo=0`}
            title="Showreel"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      ) : (
        <div 
          className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center group"
          onClick={(e) => e.stopPropagation()}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            className="w-full h-full object-contain shadow-2xl"
            playsInline
          />
        </div>
      )}
    </div>,
    document.body
  );
};