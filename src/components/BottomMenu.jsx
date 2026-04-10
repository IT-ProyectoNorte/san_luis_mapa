import React from 'react';
import { useControls } from 'react-zoom-pan-pinch';
import { Plus, Minus } from 'lucide-react';
import Logo from './Logo';

export default function BottomMenu() {
  const { zoomIn, zoomOut } = useControls();

  return (
    <div className="bg-[#2f2f31] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] px-2 sm:px-4 py-1.5 sm:py-3 md:py-3 lg:py-4 flex flex-row items-center justify-between gap-1 sm:gap-3 md:gap-6 pointer-events-auto border-t border-white/5 overflow-hidden">
       
       {/* References - single row always */}
       <div className="flex flex-row items-center gap-2 sm:gap-2 md:gap-4 min-w-0 flex-1">
          
         {/* Residencial */}
         <div className="flex flex-col items-center gap-0.5 shrink-0">
            <div className="bg-white flex items-center justify-center rounded-lg w-[24px] h-[28px] sm:w-[28px] sm:h-[32px] md:w-[28px] md:h-[32px]">
               <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[12px] md:h-[12px] rounded-full bg-[#B0B6D5]" />
            </div>
            <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-bold text-white font-open-sans-cond tracking-tight leading-none whitespace-nowrap">RESIDENCIAL</span>
         </div>

         {/* Mixto */}
         <div className="flex flex-col items-center gap-0.5 shrink-0">
            <div className="bg-white flex items-center justify-center rounded-lg w-[24px] h-[28px] sm:w-[28px] sm:h-[32px] md:w-[28px] md:h-[32px]">
               <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[12px] md:h-[12px] rounded-full bg-[#C0B391]" />
            </div>
            <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-bold text-white font-open-sans-cond tracking-tight leading-none whitespace-nowrap">MIXTO</span>
         </div>
         
         {/* Comercial */}
         <div className="flex flex-col items-center gap-0.5 shrink-0">
            <div className="bg-white flex items-center justify-center rounded-lg w-[24px] h-[28px] sm:w-[28px] sm:h-[32px] md:w-[28px] md:h-[32px]">
               <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[12px] md:h-[12px] rounded-full bg-[#A48671]" />
            </div>
            <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-bold text-white font-open-sans-cond tracking-tight leading-none whitespace-nowrap">COMERCIAL</span>
         </div>

         {/* No Disponible */}
          <div className="flex flex-col items-center gap-0.5 shrink-0">
            <div className="bg-white flex items-center justify-center rounded-lg w-[24px] h-[28px] sm:w-[28px] sm:h-[32px] md:w-[28px] md:h-[32px]">
               <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] md:w-[12px] md:h-[12px] rounded-full bg-[#6C6C6C]" />
            </div>
            <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-bold text-white font-open-sans-cond tracking-tight leading-none whitespace-nowrap">NO DISP.</span>
         </div>

       </div>

       {/* Zoom + Logo - single row always */}
       <div className="flex flex-row items-center gap-2 sm:gap-4 md:gap-8 shrink-0">
          <div className="flex flex-col items-center justify-center gap-0.5">
            <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-2">
              <button 
                onClick={() => zoomOut()} 
                aria-label="Alejar zoom" 
                className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all cursor-pointer bg-white/5"
              >
                <Minus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" strokeWidth={3} />
              </button>
              <button 
                onClick={() => zoomIn()} 
                aria-label="Acercar zoom" 
                className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border border-white/20 text-white hover:border-white/40 transition-all cursor-pointer bg-white/10"
              >
                <Plus className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" strokeWidth={3} />
              </button>
            </div>
            <span className="text-white text-[6px] sm:text-[7px] md:text-[9px] font-bold tracking-[0.2em] leading-none font-open-sans-cond opacity-80">ZOOM</span>
          </div>

          <div className="w-[1px] h-6 sm:h-10 md:h-12 bg-white/10" />

          {/* Logo - smaller proportionally */}
          <div className="flex items-center justify-center brightness-0 invert opacity-90 scale-75 sm:scale-85 md:scale-90">
            <Logo width="w-6 sm:w-10 md:w-12" />
          </div>
       </div>

    </div>
  );
}
