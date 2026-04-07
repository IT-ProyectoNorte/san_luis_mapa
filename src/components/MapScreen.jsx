import React, { useEffect } from 'react';
import { TransformWrapper } from 'react-zoom-pan-pinch';
import { useStore } from '../store/useStore';
import MapCanvas from './MapCanvas';
import InfoCard from './InfoCard';
import BottomMenu from './BottomMenu';

export default function MapScreen({ deviceView = 'desktop' }) {
  const selectedLotId = useStore(state => state.selectedLotId);
  const fetchLotsData = useStore(state => state.fetchLotsData);
  const loading = useStore(state => state.loading);
  const error = useStore(state => state.error);

  useEffect(() => {
    fetchLotsData();
  }, [fetchLotsData]);

  return (
    <div className="w-full h-[100dvh] bg-[#D8E2E1] flex justify-center overflow-hidden relative">
      <div className="relative w-full h-full flex flex-col transition-all duration-700 ease-in-out">
        <TransformWrapper
          key={loading ? 'loading' : 'ready'}
          initialScale={deviceView === 'mobile' ? 0.25 : 1}
          minScale={0.1}
          maxScale={5}
          centerOnInit={true}
          limitToBounds={false}
        >
          {/* Canvas map */}
          <div className="flex-1 w-full overflow-hidden relative">
            <MapCanvas />
            
            {/* Loading overlay */}
            {loading && (
              <div className="absolute inset-0 bg-[#D8E2E1]/80 flex items-center justify-center z-40">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 border-4 border-azul4 border-t-transparent rounded-full animate-spin" />
                  <span className="text-azul4 font-nexa font-bold text-sm tracking-wider">CARGANDO LOTES...</span>
                </div>
              </div>
            )}

            {/* Error message */}
            {error && !loading && (
              <div className="absolute top-4 left-4 right-4 bg-red-50 border border-red-200 rounded-lg px-4 py-3 z-40">
                <p className="text-red-700 text-sm font-nexa text-center">{error}</p>
              </div>
            )}
          </div>

          {/* UI Fixed (InfoCard + BottomMenu Stacked) */}
          <div className="absolute bottom-0 left-0 right-0 z-50 pointer-events-none flex flex-col items-end">
            {/* InfoCard floats exactly on top, aligned to right edge (margin 0) */}
            {selectedLotId && (
              <div className="pointer-events-none flex justify-end w-full">
                <InfoCard />
              </div>
            )}
            
            {/* Bottom Menu taking full width */}
            <div className="pointer-events-auto w-full max-h-[50vh] overflow-y-auto">
              <BottomMenu />
            </div>
          </div>
        </TransformWrapper>
      </div>
    </div>
  );
}
