import React from 'react';
import { useControls } from 'react-zoom-pan-pinch';
import { Plus, Minus } from 'lucide-react';
import Logo from './Logo';

export default function BottomMenu() {
  const { zoomIn, zoomOut } = useControls();

  return (
    <div className="bg-dark-grey shadow-[0_-10px_40px_rgba(0,0,0,0.3)] px-3 sm:px-4 py-2 sm:py-3 md:py-3 lg:py-4 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2 sm:gap-3 md:gap-6 pointer-events-auto border-t border-white/5">
       
       {/* References - Figma styled layout */}
       <div className="flex flex-col items-end gap-1 sm:gap-1.5 md:gap-2 w-full sm:w-auto">
          {/* Title */}
          <div className="flex flex-col w-full text-right items-end">
             <span className="text-white font-open-sans-cond font-bold text-[11px] sm:text-[14px] md:text-[18px] lg:text-[20px] leading-none whitespace-nowrap uppercase tracking-widest">Referencias</span>
             <div className="w-full h-[1px] bg-white/20 mt-0.5" />
          </div>

          {/* Items */}
          <div className="flex flex-row items-end justify-end gap-1.5 sm:gap-2 md:gap-4 mt-1 sm:mt-1.5 flex-wrap">
             
             <div className="flex flex-col items-center gap-0.5 sm:gap-1 md:gap-1.5 min-w-[26px] sm:min-w-[30px] md:min-w-[45px]">
                <div className="bg-white flex items-center justify-center rounded-[3px] sm:rounded-[3px] md:rounded-[4px] w-[20px] h-[12px] sm:w-[24px] sm:h-[14px] md:w-[28px] md:h-[18px]">
                   <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#B0B6D5]" />
                </div>
                <span className="text-[6px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-bold text-white font-open-sans-cond tracking-tighter sm:tracking-widest leading-none whitespace-nowrap">RESIDENCIAL</span>
             </div>

             <div className="flex flex-col items-center gap-0.5 sm:gap-1 md:gap-1.5 min-w-[26px] sm:min-w-[30px] md:min-w-[45px]">
                <div className="bg-white flex items-center justify-center rounded-[3px] sm:rounded-[3px] md:rounded-[4px] w-[20px] h-[12px] sm:w-[24px] sm:h-[14px] md:w-[28px] md:h-[18px]">
                   <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#C0B391]" />
                </div>
                <span className="text-[6px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-bold text-white font-open-sans-cond tracking-tighter sm:tracking-widest leading-none whitespace-nowrap">MIXTO</span>
             </div>
             
             <div className="flex flex-col items-center gap-0.5 sm:gap-1 md:gap-1.5 min-w-[26px] sm:min-w-[30px] md:min-w-[45px]">
                <div className="bg-white flex items-center justify-center rounded-[3px] sm:rounded-[3px] md:rounded-[4px] w-[20px] h-[12px] sm:w-[24px] sm:h-[14px] md:w-[28px] md:h-[18px]">
                   <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#9A8B7A]" />
                </div>
                <span className="text-[6px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-bold text-white font-open-sans-cond tracking-tighter sm:tracking-widest leading-none whitespace-nowrap">COMERCIAL</span>
             </div>

             <div className="flex flex-col items-center gap-0.5 sm:gap-1 md:gap-1.5 min-w-[26px] sm:min-w-[30px] md:min-w-[45px]">
                <div className="bg-white flex items-center justify-center rounded-[3px] sm:rounded-[3px] md:rounded-[4px] w-[20px] h-[12px] sm:w-[24px] sm:h-[14px] md:w-[28px] md:h-[18px]">
                   <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#888888]" />
                </div>
                <span className="text-[6px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-bold text-white font-open-sans-cond tracking-tighter sm:tracking-widest leading-none whitespace-nowrap">VENDIDO</span>
             </div>

             <div className="flex flex-col items-center gap-0.5 sm:gap-1 md:gap-1.5 min-w-[26px] sm:min-w-[30px] md:min-w-[45px]">
                <div className="bg-white flex items-center justify-center rounded-[3px] sm:rounded-[3px] md:rounded-[4px] w-[20px] h-[12px] sm:w-[24px] sm:h-[14px] md:w-[28px] md:h-[18px]">
                   <div className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#D3D3D3]" />
                </div>
                <span className="text-[6px] sm:text-[7px] md:text-[9px] lg:text-[11px] font-bold text-white font-open-sans-cond tracking-tighter sm:tracking-widest leading-none whitespace-nowrap">NO DISP.</span>
             </div>

          </div>
       </div>

       {/* Zoom + Logo */}
       <div className="flex items-center gap-4 sm:gap-6 md:gap-14 shrink-0">
          {/* Zoom */}
          <div className="flex flex-col items-center justify-center gap-0.5 sm:gap-1">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
              <button 
                onClick={() => zoomOut()} 
                aria-label="Alejar zoom" 
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all cursor-pointer bg-white/5"
              >
                <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5" strokeWidth={3} />
              </button>
              <button 
                onClick={() => zoomIn()} 
                aria-label="Acercar zoom" 
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border border-white/20 text-white hover:border-white/40 transition-all cursor-pointer bg-white/10"
              >
                <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-5 md:h-5" strokeWidth={3} />
              </button>
            </div>
            <span className="text-white text-[7px] sm:text-[8px] md:text-[10px] font-bold tracking-[0.3em] leading-none font-open-sans-cond opacity-80 mt-0.5">ZOOM</span>
          </div>

          <div className="w-[1px] h-10 sm:h-14 md:h-16 bg-white/10" />

          {/* Logo */}
          <div className="flex items-center justify-center brightness-0 invert opacity-90 scale-110 sm:scale-100">
            <Logo width="w-12 sm:w-16 md:w-14" />
          </div>
       </div>

    </div>
  );
}
