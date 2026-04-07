import React from 'react';
import { useStore } from '../store/useStore';
import { X } from 'lucide-react';

export default function InfoCard() {
  const selectedLotId = useStore(state => state.selectedLotId);
  const lotsData = useStore(state => state.lotsData);
  const setSelectedLotId = useStore(state => state.setSelectedLotId);

  if (!selectedLotId) return null;

  const idMatch = selectedLotId?.match(/M(\d+)_L(\d+)/i);
  const fallbackManzana = idMatch ? idMatch[1] : '?';
  const fallbackLote = idMatch ? idMatch[2] : '?';

  const lot = lotsData.find(l => (
    l.ID === selectedLotId || l.id === selectedLotId
  )) || {
    ID: selectedLotId,
    Estado: 'Sin datos',
    Superficie: '---',
    Precio: '---',
    Manzana: fallbackManzana,
    Lote: fallbackLote,
    Orientacion: '---',
    Uso: '---',
    Precio_financiado: '---',
    Cuota: '---',
  };

  const mText = `M ${lot.Manzana || fallbackManzana}`;
  const lText = `Lote ${lot.Lote || fallbackLote}`;

  // Pill reference color helper
  const renderUsoIcon = (uso) => {
    const usoColors = {
      residencia: '#B0B6D5',
      mixto: '#C0B391',
      comercial: '#9A8B7A',
      institucional: '#E4E4E4',
    };
    const normalizeUso = (uso || '').toLowerCase();
    const color = usoColors[normalizeUso] || '#C0B391'; // default mixtoish
    return (
      <div className="bg-white flex items-center justify-center p-[4px] rounded-[8px] h-[18px] md:h-[24px]">
        <div className="w-[11px] h-[11px] md:w-[15px] md:h-[15px] rounded-full" style={{ backgroundColor: color }} />
      </div>
    );
  };

  return (
    <div className="w-full sm:w-[300px] md:w-[350px] bg-[#2f2f31f2] backdrop-blur-md rounded-l-[5px] sm:rounded-r-none rounded-b-none flex flex-col p-4 sm:p-5 md:p-6 pt-3 sm:pt-4 md:pt-5 pointer-events-auto border border-white/5 sm:border-r-0 animate-in fade-in zoom-in-95 duration-200">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6 md:mb-6">
        <div className="flex flex-col gap-0.5 items-start">
           <span className="text-[38px] md:text-[44px] text-white font-antonio leading-none tracking-tight">{lText}</span>
           <div className="flex items-center gap-3 w-full">
              <span className="text-[18px] md:text-[20px] text-white font-open-sans-cond font-light opacity-90 leading-none">{mText}</span>
              <div className="flex-1 h-[1px] bg-white/20 mt-1" />
           </div>
        </div>
        <button 
           onClick={() => setSelectedLotId(null)} 
           aria-label="Cerrar información del lote" 
           className="text-white/60 hover:text-white transition-colors cursor-pointer mt-2 md:mt-4"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2} />
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 md:gap-4 pt-1">
         
         <div className="flex items-center gap-3">
             <span className="text-white font-open-sans-cond font-bold text-[12px] md:text-[14px] opacity-100 tracking-[0.75px] w-[60px] md:w-[85px]">Tamaño</span>
             <div className="bg-gradient-to-r from-white/10 to-transparent px-3 py-1 rounded-[4px] flex items-baseline gap-1 relative overflow-hidden flex-1">
                <span className="text-white font-open-sans-cond font-light text-[13px] md:text-[16px] tracking-[0.75px] z-10">{lot.Superficie}</span>
                <span className="text-white font-open-sans-cond font-light text-[9px] md:text-[12px] tracking-[0.6px] z-10">m<span className="text-[7px] md:text-[8px] align-top">2</span></span>
             </div>
         </div>

         <div className="flex items-center gap-3">
             <span className="text-white font-open-sans-cond font-bold text-[12px] md:text-[14px] opacity-100 tracking-[0.75px] w-[60px] md:w-[85px]">Uso</span>
             <div className="bg-gradient-to-r from-white/10 to-transparent px-3 py-1 rounded-[4px] flex items-center gap-2 relative overflow-hidden flex-1">
                  <span className="text-white font-open-sans-cond font-light text-[13px] md:text-[16px] tracking-[0.75px] capitalize z-10">{lot.Uso || '---'}</span>
                  {renderUsoIcon(lot.Uso)}
             </div>
         </div>

         <div className="flex items-center gap-3">
             <span className="text-white font-open-sans-cond font-bold text-[12px] md:text-[14px] opacity-100 tracking-[0.75px] w-[60px] md:w-[85px]">Orientación</span>
             <div className="bg-gradient-to-r from-white/10 to-transparent px-3 py-1 rounded-[4px] flex relative overflow-hidden flex-1">
                <span className="text-white font-open-sans-cond font-light text-[13px] md:text-[16px] tracking-[0.75px] z-10">{lot.Orientacion || '---'}</span>
             </div>
         </div>

         <div className="flex items-center gap-3">
             <span className="text-white font-open-sans-cond font-bold text-[12px] md:text-[14px] opacity-100 tracking-[0.75px] w-[60px] md:w-[85px]">Contado</span>
             <div className="bg-gradient-to-r from-white/10 to-transparent px-3 py-1 rounded-[4px] flex items-baseline gap-2 relative overflow-hidden flex-1">
                <span className="text-white font-open-sans-cond font-light text-[13px] md:text-[16px] tracking-[0.75px] z-10">{lot.Precio || '---'}</span>
                <span className="text-white font-open-sans-cond font-light text-[9px] md:text-[12px] tracking-[0.6px] z-10">USD</span>
             </div>
         </div>

         <div className="flex items-center gap-3">
             <span className="text-white font-open-sans-cond font-bold text-[12px] md:text-[14px] opacity-100 tracking-[0.75px] w-[60px] md:w-[85px]">Financiado</span>
             <div className="bg-gradient-to-r from-white/10 to-transparent px-3 py-1 rounded-[4px] flex items-baseline gap-2 relative overflow-hidden flex-1">
                <span className="text-white font-open-sans-cond font-light text-[13px] md:text-[16px] tracking-[0.75px] z-10">{lot.Precio_financiado || '0'}</span>
                <span className="text-white font-open-sans-cond font-light text-[9px] md:text-[12px] tracking-[0.6px] z-10">USD</span>
                <span className="text-white font-open-sans-cond font-light text-[13px] md:text-[16px] tracking-[0.75px] z-10 ml-2">{lot.Cuota || '0'}</span>
                <span className="text-white font-open-sans-cond font-light text-[9px] md:text-[12px] tracking-[0.6px] z-10 uppercase">vto</span>
             </div>
         </div>
      </div>
      
    </div>
  );
}
