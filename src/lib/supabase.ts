import { createClient } from '@supabase/supabase-js';

// These environment variables need to be set in your .env.local file
// or in your Vercel project settings.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseKey);
