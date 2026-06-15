import { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { Sparkles, Eye } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleTouchStart = () => {
    isDragging.current = true;
  };

  useEffect(() => {
    const handleMouseUpOrTouchEnd = () => {
      isDragging.current = false;
    };

    const handleMouseMoveGlobal = (e: MouseEvent) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    };

    const handleTouchMoveGlobal = (e: TouchEvent) => {
      if (!isDragging.current || !e.touches[0]) return;
      handleMove(e.touches[0].clientX);
    };

    window.addEventListener('mouseup', handleMouseUpOrTouchEnd);
    window.addEventListener('touchend', handleMouseUpOrTouchEnd);
    window.addEventListener('mousemove', handleMouseMoveGlobal);
    window.addEventListener('touchmove', handleTouchMoveGlobal);

    return () => {
      window.removeEventListener('mouseup', handleMouseUpOrTouchEnd);
      window.removeEventListener('touchend', handleMouseUpOrTouchEnd);
      window.removeEventListener('mousemove', handleMouseMoveGlobal);
      window.removeEventListener('touchmove', handleTouchMoveGlobal);
    };
  }, []);

  const handleClickOrTap = (e: ReactMouseEvent<HTMLDivElement> | ReactTouchEvent<HTMLDivElement>) => {
    let clientX = 0;
    if ('touches' in e) {
      if (e.touches[0]) clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    if (clientX > 0) {
      handleMove(clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClickOrTap}
      className="relative w-full aspect-video select-none overflow-hidden rounded-t-[32px] md:rounded-t-[40px] cursor-ew-resize bg-black/90 group"
      id="before-after-slider-container"
    >
      {/* Before Image - sits in background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={beforeImage}
          alt="Before preview"
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
          id="before-image-asset"
        />
        <span className="absolute top-6 left-6 bg-black/70 backdrop-blur-md text-white text-[11px] font-black tracking-widest px-3.5 py-1.5 rounded-lg border border-white/10 z-20 flex items-center gap-1.5 shadow-lg">
          <Eye className="w-3.5 h-3.5 text-gray-400" />
          {beforeLabel}
        </span>
      </div>

      {/* After Image - styled as a clipping mask overlay */}
      <div
        className="absolute inset-0 h-full overflow-hidden transition-all duration-75"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="absolute inset-0 w-full h-full min-w-full" style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}>
          <img
            src={afterImage}
            alt="After preview"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            style={{ width: containerRef.current?.getBoundingClientRect().width || '100vw', maxWidth: 'none' }}
            id="after-image-asset"
          />
        </div>
        <span className="absolute top-6 right-6 bg-brand text-black text-[11px] font-black tracking-widest px-3.5 py-1.5 rounded-lg z-20 flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,255,0,0.5)]">
          <Sparkles className="w-3.5 h-3.5" />
          {afterLabel}
        </span>
      </div>

      {/* Slider middle bar handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize z-30 pointer-events-none group-hover:bg-brand/90 transition-all shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        style={{ left: `${sliderPos}%` }}
        id="slider-bar-handler"
      >
        <div
          onMouseDown={(e) => { e.stopPropagation(); handleMouseDown(); }}
          onTouchStart={(e) => { e.stopPropagation(); handleTouchStart(); }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 border-2 border-white rounded-full w-10 h-10 flex items-center justify-center shadow-2xl pointer-events-auto hover:scale-110 active:scale-95 transition-all text-white hover:text-brand"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 5l-7 7 7 7M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
          </svg>
        </div>
      </div>

      {/* Tiny instructions helper that floats at bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-gray-300 text-[10px] font-bold tracking-wider px-4 py-1 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        DRAG SLIDER TO COMPARE
      </div>
    </div>
  );
}
