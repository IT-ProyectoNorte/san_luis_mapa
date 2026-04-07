import React from 'react';
import { useControls } from 'react-zoom-pan-pinch';
import { Plus, Minus } from 'lucide-react';
import Logo from './Logo';

export default function BottomMenu() {
  const { zoomIn, zoomOut } = useControls();

  return (
    <div className="bg-dark-grey shadow-[0_-10px_40px_rgba(0,0,0,0.3)] px-2 sm:px-4 py-1.5 sm:py-3 md:py-3 lg:py-4 flex flex-row items-center justify-between gap-1 sm:gap-3 md:gap-6 pointer-events-auto border-t border-white/5 overflow-hidden">
       
       {/* References - single row always */}
       <div className="flex flex-row items-center gap-1.5 sm:gap-2 md:gap-4 min-w-0 flex-1">
          
          <div className="flex flex-col items-center gap-0.5 shrink-0">
             <div className="bg-white flex items-center justify-center rounded-[2px] w-[16px] h-[10px] sm:w-[24px] sm:h-[14px] md:w-[28px] md:h-[18px]">
                <div className="w-[5px] h-[5px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#B0B6D5]" />
             </div>
             <span className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-bold text-white font-open-sans-cond tracking-tighter leading-none whitespace-nowrap">RESIDENCIAL</span>
          </div>

          <div className="flex flex-col items-center gap-0.5 shrink-0">
             <div className="bg-white flex items-center justify-center rounded-[2px] w-[16px] h-[10px] sm:w-[24px] sm:h-[14px] md:w-[28px] md:h-[18px]">
                <div className="w-[5px] h-[5px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#C0B391]" />
             </div>
             <span className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-bold text-white font-open-sans-cond tracking-tighter leading-none whitespace-nowrap">MIXTO</span>
          </div>
          
          <div className="flex flex-col items-center gap-0.5 shrink-0">
             <div className="bg-white flex items-center justify-center rounded-[2px] w-[16px] h-[10px] sm:w-[24px] sm:h-[14px] md:w-[28px] md:h-[18px]">
                <div className="w-[5px] h-[5px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#9A8B7A]" />
             </div>
             <span className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-bold text-white font-open-sans-cond tracking-tighter leading-none whitespace-nowrap">COMERCIAL</span>
          </div>

          <div className="flex flex-col items-center gap-0.5 shrink-0">
             <div className="bg-white flex items-center justify-center rounded-[2px] w-[16px] h-[10px] sm:w-[24px] sm:h-[14px] md:w-[28px] md:h-[18px]">
                <div className="w-[5px] h-[5px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#888888]" />
             </div>
             <span className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-bold text-white font-open-sans-cond tracking-tighter leading-none whitespace-nowrap">VENDIDO</span>
          </div>

          <div className="flex flex-col items-center gap-0.5 shrink-0">
             <div className="bg-white flex items-center justify-center rounded-[2px] w-[16px] h-[10px] sm:w-[24px] sm:h-[14px] md:w-[28px] md:h-[18px]">
                <div className="w-[5px] h-[5px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#D3D3D3]" />
             </div>
             <span className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-bold text-white font-open-sans-cond tracking-tighter leading-none whitespace-nowrap">NO DISP.</span>
          </div>

       </div>

       {/* Zoom + Logo - single row always */}
       <div className="flex flex-row items-center gap-2 sm:gap-6 md:gap-14 shrink-0">
          <div className="flex flex-col items-center justify-center gap-0.5">
            <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3">
              <button 
                onClick={() => zoomOut()} 
                aria-label="Alejar zoom" 
                className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all cursor-pointer bg-white/5"
              >
                <Minus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5" strokeWidth={3} />
              </button>
              <button 
                onClick={() => zoomIn()} 
                aria-label="Acercar zoom" 
                className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white/20 text-white hover:border-white/40 transition-all cursor-pointer bg-white/10"
              >
                <Plus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5" strokeWidth={3} />
              </button>
            </div>
            <span className="text-white text-[6px] sm:text-[8px] md:text-[10px] font-bold tracking-[0.3em] leading-none font-open-sans-cond opacity-80">ZOOM</span>
          </div>

          <div className="w-[1px] h-8 sm:h-14 md:h-16 bg-white/10" />

          {/* Logo - very small on mobile */}
          <div className="flex items-center justify-center brightness-0 invert opacity-90 scale-90 sm:scale-100">
            <Logo width="w-8 sm:w-16 md:w-14" />
          </div>
       </div>

    </div>
  );
}
