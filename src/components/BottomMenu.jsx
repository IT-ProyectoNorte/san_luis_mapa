import React from 'react';
import { useControls } from 'react-zoom-pan-pinch';
import { Plus, Minus } from 'lucide-react';
import Logo from './Logo';

export default function BottomMenu() {
  const { zoomIn, zoomOut } = useControls();

  return (
    <div className="bg-[#2f2f31] shadow-[0_-10px_40px_rgba(0,0,0,0.3)] px-3 sm:px-4 py-2 sm:py-3 md:py-3 lg:py-4 flex flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-6 pointer-events-auto border-t border-white/5 overflow-hidden">
       
       {/* References - single row always */}
       <div className="flex flex-row items-center gap-3 sm:gap-3 md:gap-4 lg:gap-5 min-w-0 flex-1">
          
         {/* Residencial */}
         <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="bg-white flex items-center justify-center rounded-lg w-7 h-8 sm:w-8 sm:h-9 md:w-9 md:h-10 lg:w-9 lg:h-11">
               <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3 md:w-3 lg:w-[13px] lg:h-[13px] rounded-full bg-[#B0B6D5]" />
            </div>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-normal text-white font-open-sans-cond tracking-tight leading-none whitespace-nowrap">RESIDENCIAL</span>
         </div>

         {/* Mixto */}
         <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="bg-white flex items-center justify-center rounded-lg w-7 h-8 sm:w-8 sm:h-9 md:w-9 md:h-10 lg:w-9 lg:h-11">
               <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3 md:w-3 lg:w-[13px] lg:h-[13px] rounded-full bg-[#C0B391]" />
            </div>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-normal text-white font-open-sans-cond tracking-tight leading-none whitespace-nowrap">MIXTO</span>
         </div>
         
         {/* Comercial */}
         <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="bg-white flex items-center justify-center rounded-lg w-7 h-8 sm:w-8 sm:h-9 md:w-9 md:h-10 lg:w-9 lg:h-11">
               <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3 md:w-3 lg:w-[13px] lg:h-[13px] rounded-full bg-[#A48671]" />
            </div>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-normal text-white font-open-sans-cond tracking-tight leading-none whitespace-nowrap">COMERCIAL</span>
         </div>

         {/* No Disponible */}
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="bg-white flex items-center justify-center rounded-lg w-7 h-8 sm:w-8 sm:h-9 md:w-9 md:h-10 lg:w-9 lg:h-11">
               <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3 md:w-3 lg:w-[13px] lg:h-[13px] rounded-full bg-[#6C6C6C]" />
            </div>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-normal text-white font-open-sans-cond tracking-tight leading-none whitespace-nowrap">NO DISP.</span>
         </div>

       </div>

       {/* Zoom + Logo - single row always */}
       <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 shrink-0">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2 lg:gap-2">
              <button 
                onClick={() => zoomOut()} 
                aria-label="Alejar zoom" 
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-9 lg:h-9 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/40 transition-all cursor-pointer bg-white/5"
              >
                <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4" strokeWidth={3} />
              </button>
              <button 
                onClick={() => zoomIn()} 
                aria-label="Acercar zoom" 
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-9 lg:h-9 rounded-full border border-white/20 text-white hover:border-white/40 transition-all cursor-pointer bg-white/10"
              >
                <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4" strokeWidth={3} />
              </button>
            </div>
            <span className="text-white text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-bold tracking-[0.2em] leading-none font-open-sans-cond opacity-80">ZOOM</span>
          </div>

          <div className="w-[1px] h-8 sm:h-10 md:h-12 lg:h-14 bg-white/10" />

          {/* Logo - proportionally sized */}
          <div className="flex items-center justify-center brightness-0 invert opacity-90 scale-80 sm:scale-90 md:scale-95 lg:scale-100">
            <Logo width="w-7 sm:w-9 md:w-10 lg:w-12" />
          </div>
       </div>

    </div>
  );
}
