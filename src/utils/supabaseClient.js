import { createClient } from '@supabase/supabase-js';

// The browser CAN see variables that start with VITE_ or NEXT_PUBLIC_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; 
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
