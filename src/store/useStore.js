import { create } from 'zustand';
import { supabase } from '../lib/supabase';

function getDeviceView() {
  if (typeof window === 'undefined') return 'desktop';
  const w = window.innerWidth;
  if (w >= 1024) return 'desktop';
  if (w >= 640) return 'tablet';
  return 'mobile';
}

export const useStore = create((set, get) => ({
  tutorialDismissed: false,
  deviceView: getDeviceView(),
  selectedLotId: null,
  lotsData: [],
  loading: true,
  error: null,

  dismissTutorial: () => set({ tutorialDismissed: true }),
  setDeviceView: (view) => set({ deviceView: view }),
  setSelectedLotId: (id) => set({ selectedLotId: id }),
  
  initDeviceDetection: () => {
    const handleResize = () => set({ deviceView: getDeviceView() });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },
  
  fetchLotsData: async () => {
    set({ loading: true, error: null });
    console.log('🔄 Fetching data from Supabase...');
    console.log('URL:', import.meta.env.VITE_SUPABASE_URL);
    
    try {
      const { data, error } = await supabase
        .from('san_luis')
        .select('*')
        .limit(5);

      console.log('Response:', { data, error });
      
      if (error) {
        console.error('❌ Error fetching from "san luis" table:', error.message);
        console.error('Error details:', error);
        set({ lotsData: [], loading: false, error: `Error: ${error.message}` });
        return;
      }
      
      if (data && data.length > 0) {
        const columns = Object.keys(data[0]);
        console.log(`✅ Loaded ${data.length} rows from "san luis" table.`);
        console.log('Columns found:', columns);
        
        // Fetch all data
        const { data: allData, error: allError } = await supabase
          .from('san_luis')
          .select('*');
          
        if (allError) {
          console.error('Error fetching all data:', allError);
          set({ lotsData: data, loading: false, error: null });
          return;
        }
        
        console.log(`✅ Total rows: ${allData?.length || 0}`);
        set({ lotsData: allData || data, loading: false, error: null });
      } else {
        console.warn('⚠️ Table "san luis" returned 0 rows.');
        set({ lotsData: [], loading: false, error: 'No hay datos en la base de datos.' });
      }
    } catch (err) {
      console.error('❌ Unexpected error fetching from "san luis":', err.message);
      console.error(err);
      set({ lotsData: [], loading: false, error: 'Error de conexión. Intenta recargar la página.' });
    }
  }
}));
