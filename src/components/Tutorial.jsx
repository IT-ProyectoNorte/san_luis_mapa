import React from 'react';
import { useStore } from '../store/useStore';
import { Map } from 'lucide-react';
import Logo from './Logo';

export default function Tutorial() {
  const dismissTutorial = useStore(state => state.dismissTutorial);

  return (
    <div className="w-full min-h-[100dvh] flex flex-col overflow-y-auto bg-[#191919] select-none text-center">
      
      {/* Top Banner - Dark Grey */}
      <div className="bg-[#2f2f31] flex flex-col items-center justify-center py-6 sm:py-10 md:py-16 px-4 shrink-0 shadow-lg z-10 gap-4 sm:gap-8 md:gap-14">
        <h2 className="text-white text-[22px] sm:text-[28px] md:text-[34px] font-antonio leading-none tracking-wide text-center">Cómo usar el mapa?</h2>
        
        {/* Instructions */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-center max-w-[900px] sm:flex-row sm:gap-8 md:gap-16">
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 bg-[#e2d6be]" style={{ maskImage: "url('/tutorial_mover.svg')", WebkitMaskImage: "url('/tutorial_mover.svg')", maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center" }} />
            <p className="font-open-sans-cond font-bold text-[14px] sm:text-[16px] md:text-[18px] text-white">Arrastra para moverte por el mapa.</p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 bg-[#e2d6be]" style={{ maskImage: "url('/tutorial_clic.svg')", WebkitMaskImage: "url('/tutorial_clic.svg')", maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center" }} />
            <p className="font-open-sans-cond font-bold text-[14px] sm:text-[16px] md:text-[18px] text-white">Toca un lote para ver su información.</p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 shrink-0 bg-[#e2d6be]" style={{ maskImage: "url('/tutorial_iconos-2.svg')", WebkitMaskImage: "url('/tutorial_iconos-2.svg')", maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskPosition: "center", WebkitMaskPosition: "center" }} />
            <p className="font-open-sans-cond font-bold text-[14px] sm:text-[16px] md:text-[18px] text-white">Usa la lupa para acercar o alejar.</p>
          </div>

        </div>
      </div>

      {/* Middle Banner - Beige Arena */}
      <div className="bg-[#e2d6be] flex flex-col items-center justify-center py-6 sm:py-10 md:py-16 px-4 shrink-0 shadow-inner z-0 gap-4 sm:gap-6 md:gap-12">
        <h2 className="text-[#2f2f31] text-[20px] sm:text-[24px] md:text-[30px] font-antonio leading-none tracking-wide text-center">¡Estás listo para explorar!</h2>
        
        {/* Continue Button matching new palette */}
        <button 
          onClick={dismissTutorial}
          className="flex items-center gap-2 sm:gap-4 bg-[#2f2f31] hover:bg-[#191919] text-[#e2d6be] font-bold text-xs sm:text-sm md:text-lg py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-12 rounded-full shadow-xl transition-all hover:scale-105 tracking-widest cursor-pointer mt-1"
        >
          <Map size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          VER EL MAPA
        </button>
      </div>

      {/* Bottom Area - Very Dark */}
      <div className="bg-[#191919] flex-1 flex flex-col items-center justify-center py-4 sm:py-6 px-4 relative min-h-[100px] sm:min-h-[140px] md:min-h-[180px]">
         <div className="brightness-0 invert opacity-90 mb-2">
           <Logo width="w-12 sm:w-16 md:w-14 lg:w-16" />
         </div>
         
         {/* Logo Proyecto Norte - Acoplado al bloque gris */}
         <img 
           src="/logo_proyecto_norte.svg" 
           alt="Proyecto Norte" 
           className="absolute bottom-2 right-2 sm:right-4 w-14 sm:w-20 md:w-22 lg:w-35 z-50 pointer-events-none opacity-90 -mr-1 -mb-1" 
         />
      </div>
    </div>
  );
}
